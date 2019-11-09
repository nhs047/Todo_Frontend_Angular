import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../interface/todo.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskbarService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get('http://localhost:3003/api/todo');
  }

  public updateData(id, status): Observable<any> {
    console.log(id, status);

    return this.http.put<any>(`http://localhost:3003/api/todo/${id}`, {
      state: status
    });
  }

  public addData(data: ToDo): Observable<any> {
    return this.http.post<any>(`http://localhost:3003/api/todo`, {
      title: data.title,
      description: data.description,
      username: data.username,
      state: 'toDo'
    });
  }
}
