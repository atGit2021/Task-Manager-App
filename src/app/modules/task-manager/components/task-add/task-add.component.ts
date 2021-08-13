import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  model: Task = new Task();

  constructor(private TaskService: TaskService, private router: Router) { }

  ngOnInit(): void {

  }


  addTask() {
    this.TaskService.addTask(this.model).subscribe( p => this.router.navigate(["list"]) );
  }
}
