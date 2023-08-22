import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-store-form',
  templateUrl: './add-store-form.component.html',
  styleUrls: ['./add-store-form.component.scss'],
})
export class AddStoreFormComponent {
  constructor(private router: Router) {}

  returnToHome() {
    this.router.navigate(['/']);
  }
}
