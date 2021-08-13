import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Added below imports
import { FormsModule } from '@angular/forms';
import { TaskManagerModule } from './modules/task-manager/task-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
    FormsModule, TaskManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
