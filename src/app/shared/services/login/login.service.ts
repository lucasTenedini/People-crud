import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient, private router: Router) { }

  setToken(username: string): Observable<boolean> {
    localStorage.setItem('superSecretToken', 'THIS_IS_NOT_A_TOKEN');
    localStorage.setItem('userName', username);
    return of(true)
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['sing-in'])
  }
}
