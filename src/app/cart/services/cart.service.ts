import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    books: CartItem[] = [];

    getCartItems(): Array<CartItem> {
        return this.books;
    }

    addCartItem(item: Product): void {
        const cartProduct = this.books.find(el => el.id === item.id);
        if (cartProduct) {
            this.increaseAmount(cartProduct);
        } else {
            this.books.push({
                id: item.id,
                name: item.name,
                description: '',
                price: item.price,
                available: false,
                selected: 1,
                category: null,
            });
        }
    }

    increaseAmount(product: CartItem) {
        product.price = product.price + product.price / product.selected;
        product.selected++;
    }

    getTotalCost(): number {
        return this.books.map(product => product.price).reduce((total, price) => total + price, 0);
    }

    resetCart(): void {
        this.books.length = 0;
    }
}
