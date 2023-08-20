import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  person = {
    username: 'Gigi',
    password: 'cicci',
    isLogged: true,
  };

  constructor() {}
}
