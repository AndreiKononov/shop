import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { Category } from '../enums/category';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Apple', 'A big green apple ', 3, Category.Fruit, true, true, 7),
      new Product(2, 'Orange', 'An usual orange', 8, Category.Fruit),
      new Product(3, 'Banana', 'Just a simple yellow banana', 2, Category.Fruit, true, true, 5),
    ];
  }
}
