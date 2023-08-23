import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() storeId: any;
  @Input() isLogged!: boolean;

  deleteProduct(e: Event) {
    e.stopPropagation();
    console.log(this.product);
    this.data.killProduct(this.storeId, this.product.idProduct);
  }

  constructor(private data: DataService) {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
