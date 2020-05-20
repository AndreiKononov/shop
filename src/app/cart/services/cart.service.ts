import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    books: CartItem[] = [];

    public productsSubject = new Subject<CartItem[]>();

    constructor() {
        this.productsSubject.next(this.books);
    }

    private updateProducts() {
        this.productsSubject.next(this.books);
    }

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
        this.updateProducts();
    }

    removeProduct(product: CartItem) {
        this.books = this.books.filter(productInCart => productInCart.id !== product.id);
        this.updateProducts();
        if (!this.books.length) {
            this.resetCart();
        }
    }

    increaseAmount(product: CartItem) {
        product.price = product.price + product.price / product.selected;
        product.selected++;
    }

    decreaseAmount(product: CartItem) {
        if (product.selected === 1) {
            this.removeProduct(product);
        } else {
            product.price = product.price - product.price / product.selected;
            product.selected--;
        }
    }

    getTotalCost(): number {
        return this.books.map(product => product.price).reduce((total, price) => total + price, 0);
    }

    resetCart(): void {
        this.books.length = 0;
    }
}
