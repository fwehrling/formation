import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { Jour1Component } from './jour1/jour1.component';
import { Jour2Component } from './jour2/jour2.component';
import { FromNowPipe } from './shared/from-now.pipe';
import { LettersPipe } from './shared/letters.pipe';
import { Jour3Component } from './jour3/jour3.component';
import { Jour3EnfantComponent } from './jour3-enfant/jour3-enfant.component';
import { DoNothingDirective } from './shared/do-nothing.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { RainbowDirective } from './shared/rainbow.directive';
import { ParametreComponent } from './parametre/parametre.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    Jour1Component,
    Jour2Component,
    FromNowPipe,
    LettersPipe,
    Jour3Component,
    Jour3EnfantComponent,
    DoNothingDirective,
    HighlightDirective,
    RainbowDirective,
    ParametreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
