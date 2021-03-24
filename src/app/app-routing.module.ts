import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jour1Component } from './jour1/jour1.component';
import { Jour2Component } from './jour2/jour2.component';
import { Jour3Component } from './jour3/jour3.component';
import { ParametreComponent } from './parametre/parametre.component';

const routes: Routes = [
  { path: 'jour1', component: Jour1Component },
  { path: 'jour2', component: Jour2Component },
  { path: 'jour3', component: Jour3Component },
  { path: 'jour3/:toto', component: ParametreComponent },
  { path: '**', redirectTo: 'jour1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
