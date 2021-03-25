import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<Todo[]> {
  constructor(private todoService: TodoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoService.getTodos();
  }
}
