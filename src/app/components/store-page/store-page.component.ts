import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit {
  storeExists: boolean | undefined;
  storeId!: null | string;
  store!: any;

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
    } else {
      this.storeExists = false;
    }
  }
}
