import { Injectable } from '@angular/core';

import { Product } from '../../product/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      // Думаю, что в корзине стоит использовать немного другую модель, чтобы можно было указать количество купленого товара.
      new Product(1, 'Apple', 'A big green apple ', 3, true, true),
      new Product(2, 'Orange', 'An usual orange', 8),
      new Product(3, 'Banana', 'Just a simple yellow banana', 2, true),
      new Product(4, 'Cherry', 'Just a red cherry', 1.5, true, true),
    ];
  }
}
