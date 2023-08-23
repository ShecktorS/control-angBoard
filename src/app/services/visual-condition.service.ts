import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisualConditionService {
  modalAddProduct = false;
  latencySimulate = true;

  swicthCondition() {
    this.modalAddProduct = !this.modalAddProduct;
    console.log(this.modalAddProduct);
  }

  loadData() {
    this.latencySimulate = false;
    // Dati caricati -> disattivazione del caricamento fittizio
  }

  constructor() {}
}
