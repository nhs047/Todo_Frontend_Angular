import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
cardNonAuth = 'card-non-auth';

  title = 'ToDo';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['../taskbar']);
}

}
