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
    this.data.killProduct(this.storeId, this.product.idProduct);
  }

  getColorPrice() {
    if (this.product.price < 11) {
      return '#35c28d';
    } else if (this.product.price < 30 && this.product.price > 10) {
      return '#e9a94a';
    } else {
      return '#dd3636';
    }
  }

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.product = this.data.getProductbyId(
    //   this.storeId,
    //   this.product.idProduct
    // );
  }
}
