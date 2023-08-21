import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() storeId: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
