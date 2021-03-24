import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodo(id: number): Observable<Todo> {
    return this._http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  deleteTodo(id: number): any {
    return this._http.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
