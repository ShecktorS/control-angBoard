import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisualConditionService {
  modalAddProduct = false;

  swicthCondition() {
    this.modalAddProduct = !this.modalAddProduct;
    console.log(this.modalAddProduct);
  }

  constructor() {}
}
