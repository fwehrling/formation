import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  constructor() {}

  isUsernameAvailable(value: string): Observable<boolean> {
    return of(false);
  }
}
