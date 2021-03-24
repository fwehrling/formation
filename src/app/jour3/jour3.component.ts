import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-jour3',
  templateUrl: './jour3.component.html',
  styleUrls: ['./jour3.component.css'],
})
export class Jour3Component implements OnInit, OnDestroy, DoCheck {
  // books: Book[];
  // subscription: Subscription;
  books$: Observable<Book[]>;
  todos$: Observable<Todo[]>;
  test = [1, 2, 3, 4, 5, 6];
  color: string;

  constructor(
    private bookService: BookService,
    private _todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.color = 'purple';
    this.books$ = this.bookService.getBooks();
    this.todos$ = this._todoService.getTodos();
    // this.subscription = this.bookService
    //   .getBooks()
    //   .subscribe((books: Book[]) => (this.books = books));
  }

  removeBook(id: number) {
    this.bookService.removeElement(id);
  }

  ngDoCheck() {
    if (this.test.length < 3) {
      console.log('Il ne reste plus que 3 éléments');
    }
  }

  removeElement() {
    this.test.splice(0, 1);
  }

  removeTodo(id: number) {
    this._todoService
      .deleteTodo(id)
      .subscribe(() => (this.todos$ = this._todoService.getTodos()));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
