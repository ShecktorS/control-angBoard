import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  addStoreCounter = 5;
  addProductCounter = 5;

  store = [
    {
      id: 1,
      name: 'Nike',
      img: 'https://picsum.photos/300/300?1',
      location: 'Milano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae repellat quam aliquid illum quasi, quaerat maxime distinctio atque fuga sequi explicabo culpa officia.',
      products: [
        { title: 'scarpa', description: 'Una bella scarpa', idProduct: 1 },
        {
          title: 'tovaglia',
          description: 'Una tovaglia ricamata',
          idProduct: 2,
        },
        {
          title: 'maglietta',
          description: 'Una maglietta prodotta in Giappone',
          idProduct: 3,
        },
        { title: 'tappeto', description: 'Una tappeto di lusso', idProduct: 4 },
      ],
    },
    {
      id: 2,
      name: 'Adidas',
      img: 'https://picsum.photos/300/300?2',
      location: 'Roma',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      products: [
        { title: 'scarpa', description: 'Una bella scarpa', idProduct: 1 },
        {
          title: 'tovaglia',
          description: 'Una tovaglia ricamata',
          idProduct: 2,
        },
      ],
    },
    {
      id: 3,
      name: 'Lonsdale',
      img: 'https://picsum.photos/300/300?3',
      location: 'Palermo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      products: [
        { title: 'tappeto', description: 'Una tappeto di lusso', idProduct: 4 },
      ],
    },
  ];

  //Store Methods:

  getStorebyId(id: string) {
    return this.store.find((store) => store.id === +id);
  }

  addStore(newStore: any) {
    this.addStoreCounter++;
    let storeImg = `https://picsum.photos/300/300?${this.addStoreCounter}`;
    let storeToAdd = {
      ...newStore,
      id: this.addStoreCounter,
      img: storeImg,
      products: [],
    };
    this.store.push(storeToAdd);
    console.log(this.store);
  }

  editStore(id: string, newStore: any) {
    let [storeToEdit] = this.store.filter((store) => store.id === +id);
    let storeUpdate = { ...storeToEdit, ...newStore };
    this.store = this.store.filter((store) => store.id !== +id);
    this.store.push(storeUpdate);
  }

  killStore(id: string) {
    return (this.store = this.store.filter((store) => store.id !== +id));
  }

  // Products Methods:

  getProductbyId(storeId: string, productId: string) {
    let thisStore = this.store.find((store) => store.id === +storeId);
    let product = thisStore?.products.find(
      (product) => product.idProduct === +productId
    );
    return product;
  }

  killProduct(storeId: string, productId: string) {
    let storeIndex = this.store.findIndex((store) => store.id === +storeId);
    let thisStore = this.store[storeIndex];
    let productIndex = thisStore?.products.findIndex(
      (product) => product.idProduct === +productId
    );
    this.store[storeIndex].products.splice(productIndex, 1);
  }

  constructor() {}
}

// TODO: Inserire nella funzione di aggiunzione un contatore che va poi ad assegnare un id sempre diverso e sempre maggiore
