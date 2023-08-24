import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PoupupService } from './services/poupup.service';
import { LocalStorageService } from './services/local-storage.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'control-angBoard';

  logout() {
    this.auth.logout();
  }

  constructor(
    public auth: AuthService,
    public poupup: PoupupService,
    private localStorage: LocalStorageService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.localStorage.checkStoredData(this.data);
    this.localStorage.checkUserIsLogged();
  }
}
