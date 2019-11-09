import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { TaskbarComponent, DialogOverviewExampleDialogComponent } from './taskbar/taskbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RedirectionComponent } from './redirection/redirection.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    DialogOverviewExampleDialogComponent,
    RedirectionComponent
  ],
  entryComponents: [TaskbarComponent, DialogOverviewExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
