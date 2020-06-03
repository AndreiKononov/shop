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

    getProducts(): Promise<Product[]> {
        return (new Promise(resolve => resolve(this.books)))
            .catch(error => error) as Promise<Product[]>;
    }
}
