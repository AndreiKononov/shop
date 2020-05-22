import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';
import { Subject } from 'rxjs';
import { ProductCommunicatorService } from '../../products/services/product-communicator.service';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    cartItems: CartItem[] = [];
    totalQuantity = 0;
    totalSum = 0;
    public productsSubject = new Subject<CartItem[]>();

    constructor(public communicator: ProductCommunicatorService) {
    }

    private updateProducts() {
        this.totalQuantity = this.cartItems.reduce(
            (prev, cur) => prev + cur.count,
            0
        );
        this.totalSum = this.cartItems.reduce(
            (prev, cur) => prev + cur.getTotal(),
            0
        );
        this.productsSubject.next(this.cartItems);
    }

    getCartItems(): CartItem[] {
        return this.cartItems;
    }

    addCartItem(item: Product): void {
        let cartItem = this.cartItems.find(
            (o) => o.product.id === item.id
        );
        if (cartItem) {
            cartItem.count++;
        } else {
            cartItem = new CartItem(item, 1);
            this.cartItems.push(cartItem);
        }
        cartItem.product.availableCount--;
        this.communicator.publishData(item);
        this.updateProducts();
    }

    removeCartItem(item: CartItem) {
        item.product.availableCount += item.count;
        this.cartItems.splice(
            this.cartItems.findIndex((o) => o === item),
            1
        );
        this.communicator.publishData(item.product);
        this.updateProducts();
    }

    increaseAmount(item: CartItem) {
        item.count++;
        item.product.availableCount--;
        this.communicator.publishData(item.product);
        this.updateProducts();
    }

    decreaseAmount(item: CartItem) {
        item.count--;
        item.product.availableCount++;
        this.communicator.publishData(item.product);
        this.updateProducts();
    }
}
