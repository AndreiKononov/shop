import { Injectable } from '@angular/core';

import { Product } from '../../product/models/product.model';
import { mockedBooks } from '../../product/services/products.constants';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    private books: Product[] = mockedBooks;

    constructor() {
    }

    getProducts(): Array<Product> {
        return this.books;
    }
}
