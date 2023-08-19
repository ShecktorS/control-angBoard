import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id');
    if (this.storeId) {
      this.storeExists = true;
      this.store = this.data.store[+this.storeId - 1];
      console.log(this.store.location);
    } else {
      this.storeExists = false;
    }
  }
}
