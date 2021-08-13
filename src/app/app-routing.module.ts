import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './modules/task-manager/components/task-add/task-add.component';
import { TaskDetailsComponent } from './modules/task-manager/components/task-details/task-details.component';
import { TaskEditComponent } from './modules/task-manager/components/task-edit/task-edit.component';
import { TaskListComponent } from './modules/task-manager/components/task-list/task-list.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "list", 
    pathMatch: "full",
  },
  { 
    path: "list",
    component: TaskListComponent
  },
  {
    path: "details/:id",
    component: TaskDetailsComponent
  },
  { path: "add",
    component: TaskAddComponent
  },
  {
    path: "edit/:id",
    component: TaskEditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
