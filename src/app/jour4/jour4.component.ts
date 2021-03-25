import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-jour4',
  templateUrl: './jour4.component.html',
  styleUrls: ['./jour4.component.css'],
})
export class Jour4Component implements OnInit {
  todos: Todo[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.todos = data['todos']));
  }
}
