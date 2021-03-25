import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  constructor() {}

  isUsernameAvailable(value: string) {
    return of(false);
  }
}
