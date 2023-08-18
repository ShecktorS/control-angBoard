import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  store = [
    {
      id: 1,
      name: 'Nike',
      img: 'https://picsum.photos/300/300?1',
      location: 'Milano',
      products: [],
    },
    {
      id: 2,
      name: 'Adidas',
      img: 'https://picsum.photos/300/300?2',
      location: 'Roma',
      products: [],
    },
    {
      id: 3,
      name: 'Londale',
      img: 'https://picsum.photos/300/300?3',
      location: 'Palermo',
      products: [],
    },
  ];

  constructor() {}
}
