import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jour1Component } from './jour1/jour1.component';
import { Jour2Component } from './jour2/jour2.component';
import { Jour3Component } from './jour3/jour3.component';
import { Jour4Component } from './jour4/jour4.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DeuxiemeGuard } from './shared/deuxieme.guard';
import { LoginGuard } from './shared/login.guard';
import { LoginService } from './shared/login.service';
import { TodoResolver } from './shared/todo.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    children: [
      { path: 'jour1', component: Jour1Component },
      {
        path: 'jour2',
        component: Jour2Component,
        canActivate: [DeuxiemeGuard],
      },
      { path: 'jour3', component: Jour3Component },
      { path: 'jour3/:toto', component: ParametreComponent },
      {
        path: 'jour4',
        component: Jour4Component,
        resolve: {
          todos: TodoResolver,
        },
        children: [
          { path: '', component: Jour1Component }, // localhost:4200/jour4
          { path: 'unautrechemin', component: Jour2Component }, // localhost:4200/jour4/unautrechemin
          { path: '**', redirectTo: '' },
        ],
      },
      {
        path: 'library',
        loadChildren: () =>
          import('./library/library.module').then((m) => m.LibraryModule),
      },
    ],
  },
  { path: '**', redirectTo: 'jour1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
