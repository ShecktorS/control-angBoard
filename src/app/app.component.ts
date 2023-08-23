import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PoupupService } from './services/poupup.service';

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

  constructor(public auth: AuthService, public poupup: PoupupService) {}

  ngOnInit(): void {}
}
