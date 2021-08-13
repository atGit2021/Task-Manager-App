import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskNavComponent } from './components/task-nav/task-nav.component';

//added RouterModule to enable RouterLink binding
import { RouterModule } from '@angular/router';
//needed to add FormsModule here too, although it's already in app.module
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ TaskListComponent, TaskDetailsComponent, TaskAddComponent, TaskEditComponent, TaskNavComponent ],
  imports: [ CommonModule, HttpClientModule, RouterModule, FormsModule ],
  exports: [TaskNavComponent],
  providers: [ TaskService ]
})

export class TaskManagerModule { }
  