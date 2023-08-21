import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  storeId!: string | null;
  productId!: string | null;
  store: any;
  product: any;

  getId = (num: number) => num - 1;

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.productId = this.route.snapshot.paramMap.get('idProduct');
    if (this.storeId && this.productId) {
      this.store = this.data.getStorebyId(this.storeId);
      this.product = this.data.getProductbyId(this.storeId, this.productId);
    } else {
    }
  }
}