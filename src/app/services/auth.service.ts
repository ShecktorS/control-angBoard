import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  person = {
    username: 'admin',
    password: 'admin',
    isLogged: false,
  };

  private token = localStorage.getItem('token') ?? '';
  http: any;

  logout() {
    this.person.isLogged = false;
    localStorage.removeItem('userIsLogged');
    localStorage.removeItem('token');
  }
  getToken() {
    return this.token;
  }

  setToken(newToken: string) {
    return (this.token = newToken);
  }

  constructor() {}
}
