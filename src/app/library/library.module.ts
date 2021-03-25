import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCodeComponent } from './form-code/form-code.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book', component: BookComponent },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-code', component: FormCodeComponent },
];

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    FormTemplateComponent,
    FormCodeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LibraryModule {}
