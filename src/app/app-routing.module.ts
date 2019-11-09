import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectionComponent } from './redirection/redirection.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

const routes: Routes = [
  { path: 'redirection', component: RedirectionComponent },
  { path: 'taskbar', component: TaskbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
