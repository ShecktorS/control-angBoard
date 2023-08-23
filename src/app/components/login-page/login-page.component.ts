import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  username!: string;
  password!: string;
  user: any;

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
      this.authService.person.isLogged = true;
      console.log(this.authService.person);
      this.router.navigate(['/']);
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
