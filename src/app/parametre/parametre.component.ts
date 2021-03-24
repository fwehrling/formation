import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css'],
})
export class ParametreComponent implements OnInit {
  param: number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _todoService: TodoService
  ) {}

  ngOnInit(): void {
    // this.param = +this.route.snapshot.paramMap.get('toto');
    this.route.paramMap
      .pipe(
        map((p: ParamMap) => (this.param = +p.get('toto'))),
        switchMap((id: number) => this._todoService.getTodo(id))
      )
      .subscribe((todo: Todo) => (this.todo = todo));
  }

  suivant() {
    const id = this.param + 1;
    this.router.navigate(['jour3', id]);
  }
}
