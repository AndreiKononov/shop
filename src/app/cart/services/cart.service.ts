import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { mockedBooks } from '../../products/services/products.constants';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    books: Product[] = mockedBooks;

    constructor() {
    }

    getProducts(): Array<Product> {
        return this.books;
    }
}
