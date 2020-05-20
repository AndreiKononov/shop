import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { mockedBooks } from './products.constants';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    books: Product[] = mockedBooks;

    constructor() {
    }

    getProducts(): Array<Product> {
        return this.books;
    }
}
