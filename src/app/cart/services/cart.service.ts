import { Injectable } from '@angular/core';

import { Product } from '../../product/models/product.model';
import { Category } from '../../product/enums/category';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Apple', 'A big green apple ', 3, Category.Fruit, true, false, 5),
      new Product(2, 'Orange', 'An usual orange', 8, Category.Fruit),
      new Product(3, 'Banana', 'Just a simple yellow banana', 2, Category.Fruit, true),
      new Product(4, 'Cherry', 'Just a red cherry', 1.5, Category.Fruit, true, false, 6),
    ];
  }
}
