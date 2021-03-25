import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkAuthentication() {
    // return this.http.get('urlverschecklogin')
    return of(true);
  }
}
