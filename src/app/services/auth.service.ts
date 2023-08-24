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

  logout() {
    this.person.isLogged = false;
    localStorage.removeItem('userIsLogged');
  }

  constructor() {}
}
