import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  checkStoredData(data: any) {
    const storedDataStringed = localStorage.getItem('data');

    if (storedDataStringed) {
      const storedData = JSON.parse(storedDataStringed);
      data.getStoredData(storedData);
    } else {
      console.warn('Dati Locali non trovati');
    }
  }

  checkUserIsLogged() {
    const userIsLogged = localStorage.getItem('userIsLogged');
    if (userIsLogged) {
      this.auth.person.isLogged = !!userIsLogged;
    }
  }

  pushStoredData(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  constructor(private auth: AuthService) {}
}
