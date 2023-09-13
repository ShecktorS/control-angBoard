import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shopEndPoint = 'shop';

  private shopData = {
    piva: '',
    name: '',
    products: [],
  };

  genShopData(piva: string, name: string) {
    this.shopData = { piva: piva, name: name, products: [] };
    return this.shopData;
  }
  constructor() {}
}
