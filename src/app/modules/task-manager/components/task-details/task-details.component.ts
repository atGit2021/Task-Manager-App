import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task = new Task();
  id!: number;

  //need to import a router in order to navigate after the edit
  //need to import a route in order to read the parameter off of the URL address
  constructor(private router: Router, private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
        this.taskService.getTask(+param["id"]).subscribe(p => this.task = p);
    });
  }

  
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(p => this.router.navigate(['list']));
  }



}
