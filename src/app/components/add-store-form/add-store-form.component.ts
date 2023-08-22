import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-store-form',
  templateUrl: './add-store-form.component.html',
  styleUrls: ['./add-store-form.component.scss'],
})
export class AddStoreFormComponent {
  newStore = {
    name: '',
    description: '',
    location: '',
  };

  emptyStore = {
    name: '',
    description: '',
    location: '',
  };

  constructor(private router: Router, private data: DataService) {}

  returnToHome() {
    this.router.navigate(['/']);
  }

  addStore() {
    let { name, description, location } = this.newStore;
    if (name.length > 1 && description.length > 1 && location.length > 1) {
      this.data.addStore(this.newStore);
      this.newStore = this.emptyStore;
      this.returnToHome();
    } else {
      return alert('Inserisci correttamente tutti i dati');
    }
  }
}
