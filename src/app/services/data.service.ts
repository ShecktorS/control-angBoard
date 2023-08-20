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
      name: 'Londale',
      img: 'https://picsum.photos/300/300?3',
      location: 'Palermo',
      products: [
        { title: 'tappeto', description: 'Una tappeto di lusso', idProduct: 4 },
      ],
    },
  ];

  constructor() {}
}
