import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    books: CartItem[] = [];
    totalQuantity = 0;
    totalSum = 0;
    public productsSubject = new Subject<CartItem[]>();

    constructor() {
        this.productsSubject.next(this.books);
    }

    private updateProducts() {
        this.totalQuantity = this.books.reduce(
            (prev, cur) => prev + cur.count,
            0
        );
        this.totalSum = this.books.reduce(
            (prev, cur) => prev + cur.getTotal(),
            0
        );
        this.productsSubject.next(this.books);
    }

    getCartItems(): Array<CartItem> {
        return this.books;
    }

    addCartItem(item: Product): void {
        let cartProduct = this.books.find(
            (o) => o.product.id === item.id
        );
        if (cartProduct) {
            cartProduct.count++;
        } else {
            cartProduct = new CartItem(item, 1);
            this.books.push(cartProduct);
        }
        cartProduct.product.availableCount--;
        this.updateProducts();
    }

    removeProduct(product: CartItem) {
        product.product.availableCount += product.count;
        this.books.splice(
            this.books.findIndex((o) => o === product),
            1
        );
        this.updateProducts();
    }

    increaseAmount(product: CartItem) {
        product.count++;
        product.product.availableCount--;
        this.updateProducts();
    }

    decreaseAmount(product: CartItem) {
        product.count--;
        product.product.availableCount++;
        this.updateProducts();
    }
}
