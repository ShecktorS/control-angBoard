import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PoupupService } from 'src/app/services/poupup.service';

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

  constructor(
    private router: Router,
    private data: DataService,
    public poupup: PoupupService
  ) {}

  returnToHome() {
    this.router.navigate(['/']);
  }

  addStore() {
    let { name, description, location } = this.newStore;
    if (name.length > 1 && description.length > 1 && location.length > 1) {
      this.data.addStore(this.newStore);
      this.newStore = this.emptyStore;
      this.returnToHome();
      this.poupup.changeEntity();
      this.poupup.getPoupup('confirm');
      this.poupup.showPoupup();
    } else {
      this.poupup.changeEntity(' dello Store');
      this.poupup.getPoupup('alert');
      this.poupup.showPoupup();
    }
  }
}
