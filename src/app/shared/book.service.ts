import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[];

  constructor() {
    this.books = [
      { id: 1, titre: 'titre1', auteur: 'auteur1', pages: 20, actif: true },
      { id: 2, titre: 'titre2', auteur: 'auteur2', pages: 26, actif: true },
      { id: 3, titre: 'titre3', auteur: 'auteur3', pages: 8, actif: true },
      { id: 4, titre: 'titre4', auteur: 'auteur4', pages: 32, actif: false },
      { id: 5, titre: 'titre5', auteur: 'auteur5', pages: 17, actif: true },
      { id: 6, titre: 'titre6', auteur: 'auteur6', pages: 9, actif: true },
    ];
  }

  getElements(): Book[] {
    return this.books;
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addElement(element: Book): void {
    this.books.push(element);
  }

  removeElement(id: number): void {
    const index = this.books.findIndex((book: Book) => book.id === id);
    this.books.splice(index, 1);
  }
}
