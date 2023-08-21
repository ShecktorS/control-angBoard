import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

//FIXME: aggiustare dopo l edit
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit {
  storeExists: boolean | undefined;
  storeId!: null | string;
  store!: any;
  editable = false;
  editStore = false;
  editStoreEntity = {
    name: '',
    description: '',
    location: '',
  };
  checkSelfCondition = true;

  editingActivate() {
    this.editable = !this.editable;
    this.editStore = false;
    // console.log(this.editStoreEntity);
  }

  showEditInput() {
    this.editStore = true;
  }

  hideEditInput() {
    this.editStore = false;
  }

  changeInfoStore(e: Event, property: string) {
    let storeProperty = (<HTMLInputElement>e.target).value;
    this.checkSelfCondition = storeProperty === this.store[property];
    this.editStoreEntity = {
      ...this.editStoreEntity,
      [property]: storeProperty,
    };
    console.log(this.editStoreEntity);
  }

  changeName(e: Event) {
    this.changeInfoStore(e, 'name');
  }

  changeDescription(e: Event) {
    this.changeInfoStore(e, 'description');
  }

  changeLocation(e: Event) {
    this.changeInfoStore(e, 'location');
  }

  confirmStoreEdit() {
    this.data.editStore(this.storeId!, this.editStoreEntity);
    this.editingActivate();
  }

  deleteStore() {
    if (this.storeId !== null) {
      this.data.killStore(this.storeId);
      this.router.navigate(['/']);
    }
  }

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id');
    if (this.storeId) {
      this.storeExists = true;
      this.store = this.data.getStorebyId(this.storeId);
      console.log(this.store.location);

      this.editStoreEntity = {
        name: this.store.name,
        description: this.store.description,
        location: this.store.location,
      };
    } else {
      this.storeExists = false;
    }
    console.log(this.data.store);
  }
}
