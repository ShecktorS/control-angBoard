import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private addStoreCounter = 5;
  private addProductCounter = 5;

  stores = this.localStorage.getStoredData();

  //Store Methods:

  getStorebyId(id: string) {
    const stores = this.localStorage.getStoredData();
    return stores.find((store: { id: number }) => store.id === +id);
  }

  addStore(newStore: any) {
    const stores = this.localStorage.getStoredData();
    this.addStoreCounter++;
    let storeImg = `https://picsum.photos/300/300?${this.addStoreCounter}`;
    let storeToAdd = {
      ...newStore,
      id: this.addStoreCounter,
      img: storeImg,
      products: [],
    };
    stores.push(storeToAdd);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  editStore(id: string, newStore: any) {
    let stores = this.localStorage.getStoredData();
    let [storeToEdit] = stores.filter(
      (store: { id: number }) => store.id === +id
    );
    let storeUpdate = { ...storeToEdit, ...newStore };
    stores = stores.filter((store: { id: number }) => store.id !== +id);
    stores.push(storeUpdate);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  killStore(id: string) {
    let stores = this.localStorage.getStoredData();
    stores = stores.filter((store: { id: number }) => store.id !== +id);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  // Products Methods:

  addProduct(idStore: string, newProduct: any) {
    const stores = this.localStorage.getStoredData();
    this.addProductCounter++;
    let updateProduct = { ...newProduct, idProduct: this.addProductCounter };
    stores[
      stores.findIndex((store: { id: number }) => store.id === +idStore)
    ].products.push(updateProduct);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  getProductbyId(storeId: string, productId: string) {
    const stores = this.localStorage.getStoredData();
    let thisStore = stores.find(
      (store: { id: number }) => store.id === +storeId
    );
    let product = thisStore?.products.find(
      (product: { idProduct: number }) => product.idProduct === +productId
    );
    return product;
  }

  editProduct(storeId: string, productId: string, newProduct: any) {
    const stores = this.localStorage.getStoredData();
    let indexOfStore = stores.findIndex(
      (store: { id: number }) => store.id === +storeId
    );
    let indexOfProduct = stores[indexOfStore].products.findIndex(
      (product: { idProduct: number }) => product.idProduct === +productId
    );
    stores[indexOfStore].products.splice(indexOfProduct, 1);
    stores[indexOfStore].products.push(newProduct);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  killProduct(storeId: string, productId: string) {
    const stores = this.localStorage.getStoredData();
    let storeIndex = stores.findIndex(
      (store: { id: number }) => store.id === +storeId
    );
    let thisStore = stores[storeIndex];
    let productIndex = thisStore?.products.findIndex(
      (product: { idProduct: number }) => product.idProduct === +productId
    );
    stores[storeIndex].products.splice(productIndex, 1);
    this.localStorage.pushStoredData(stores);
    this.stores = stores;
  }

  getStoredData(data: any) {
    let stores = data;
  }

  checkStore(storeId: number) {
    const stores = this.localStorage.getStoredData();
    return stores.map((store: { id: any }) => store.id).includes(storeId);
  }

  constructor(private localStorage: LocalStorageService) {}
}
