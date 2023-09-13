import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productEndPoint = 'product';

  private productData = {
    name: '',
    quantity: 0,
  };

  genProductData(name: string, quantity: number) {
    this.productData = { name: name, quantity: quantity };
    return this.productData;
  }

  constructor() {}
}
