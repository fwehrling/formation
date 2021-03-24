import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-jour3-enfant',
  templateUrl: './jour3-enfant.component.html',
  styleUrls: ['./jour3-enfant.component.css'],
})
export class Jour3EnfantComponent implements OnInit, OnChanges {
  @Input() books: Book[];
  @Input() todos: Todo[];
  @Output() remove = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.books) {
    }
  }

  ngOnInit(): void {}

  removeBook(id: number) {
    this.remove.emit(id);
  }

  removeTodo(id: number) {
    this.delete.emit(id);
  }

  goto(): void {
    this.router.navigate(['jour2']);
  }

  detailTodo(id: number): void {
    this.router.navigate(['jour3', id]); // jour3/id
  }
}
