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
      this.pushStoredData([]);
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

  getStoredData() {
    const data = localStorage.getItem('data');
    return !!data ? JSON.parse(data) : null;
  }

  constructor(private auth: AuthService) {}
}
