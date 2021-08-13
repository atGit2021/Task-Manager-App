import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  dbURL: string = "http://localhost:3000/task";

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.dbURL);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.dbURL + "/" + id);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.dbURL, task);
  }

  //Edit a Task methods
  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.dbURL + "/" + id);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.dbURL + "/" + task.id, task);
  }

}
