import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';
import { mockedBooks } from '../../products/services/products.constants';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    // mockedBooks: Product[] = mockedBooks;
    books: CartItem[] = [];

    getCartItems(): Array<CartItem> {
        return this.books;
    }

    addCartItem(item: Product): void {
        const cartItem: CartItem = this.books.find(el => el.name === item.name);
        // console.log(cartItem);
        // const productItem: Product = this.mockedBooks.find(el => el.id === item.id);
        // console.log(productItem)
        if (cartItem) {
            cartItem.selected++;
            // productItem.selected--;

        } else {
            const newCartItem: CartItem = Object.assign({}, item, {selected: 1});
            this.books.push(newCartItem);
        }
    }

    resetCart(): void {
        this.books.length = 0;
    }
}
