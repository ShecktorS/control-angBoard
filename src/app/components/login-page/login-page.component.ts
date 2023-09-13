import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  username!: string;
  password!: string;
  user: any;
  httpSubscription: Subscription | undefined;

  checkUser() {
    let uAuth = this.username === this.authService.person.username;
    let pAuth = this.password === this.authService.person.password;

    if (uAuth && pAuth) {
      this.user = { username: this.username, password: this.password };
      [this.username, this.password] = ['', ''];
      return true;
    } else {
      alert('accesso non autorizzato');
      [this.username, this.password] = ['', ''];
      return false;
    }
  }

  login() {
    if (this.checkUser()) {
      let token;
      this.authService.person.isLogged = true;
      localStorage.setItem('userIsLogged', 'true');

      this.httpSubscription = this.http
        .post('http://localhost:8089/authenticate', {
          username: 'admin',
          password: 'admin',
          mail: 'admin@admin.com',
        })
        .subscribe((data: any) => {
          token = data.jwttoken;
          this.authService.setToken(token);
          this.storage.pushToken(token);
          console.log(token);
        });

      this.router.navigate(['/']);
    }
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      setTimeout(() => this.httpSubscription!.unsubscribe(), 1000);
    }
  }
}
