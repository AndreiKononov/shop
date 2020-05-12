import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Apple', 'A big green apple ', 3, false),
      new Product(2, 'Orange', 'An usual orange', 8),
      new Product(3, 'Banana', 'Just a simple yellow banana', 2, false)
    ];
  }
}
