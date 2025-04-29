import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { TaskState } from './store/task.state';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TaskState])
  ],
  providers: [],
})
export class AppModule { } 