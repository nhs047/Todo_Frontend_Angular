import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
} from '@angular/core';
import { ToDo } from '../interface/todo.interface';
import { TaskbarService } from './taskbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar-component',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit, OnDestroy {
  todo: ToDo[] = [];
  progress: ToDo[] = [];
  done: ToDo[] = [];
  updateSub: Subscription;

  constructor(
    public taskbarService: TaskbarService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { username: '', title: '', description: '' }
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  ngOnInit() {
    this.taskbarService.getData().subscribe(data => {
      this.todo = data.filter(item => item.state === 'toDo');
      this.progress = data.filter(item => item.state === 'inProgress');
      this.done = data.filter(item => item.state === 'done');
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.updateSub = this.taskbarService
        .updateData(
          event.previousContainer.data[event.previousIndex]._id,
          event.container.id
        )
        .subscribe();
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnDestroy() {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }
}

@Component({
  providers: [TaskbarComponent],
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialogComponent implements OnDestroy {
  addSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDo,
    private taskbarService: TaskbarService,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    if (this.data.title && this.data.description && this.data.username) {
      this.addSub = this.taskbarService
        .addData(this.data)
        .subscribe(() => {
          this.addSub.unsubscribe();
        })
        .add(() => {
          this.dialogRef.close();
          this.router.navigate(['../redirection']);
        });
    }
  }

  ngOnDestroy() {
    if (this.addSub) {
      this.addSub.unsubscribe();
    }
  }
}
