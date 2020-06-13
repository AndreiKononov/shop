import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cartItem.model';
import { Subject } from 'rxjs';
import { ProductCommunicatorService } from '../../products/services/product-communicator.service';
import { LocalStorageService } from '../../core/services';

@Injectable({
    providedIn: 'root'
})

export class CartService {

    cartProducts: CartItem[] = [];
    totalQuantity = 0;
    totalSum = 0;
    public productsSubject = new Subject<CartItem[]>();

    constructor(
        public communicator: ProductCommunicatorService,
        public localStorageService: LocalStorageService
    ) {
    }

    private updateCartData() {
        this.totalQuantity = this.cartProducts.reduce(
            (prev, cur) => prev + cur.count,
            0
        );
        this.totalSum = this.cartProducts.reduce(
            (prev, cur) => prev + cur.getTotal(),
            0
        );
        this.productsSubject.next(this.cartProducts);
    }

    getCartItems(): CartItem[] {
        return this.cartProducts;
    }

    addProduct(item: Product): void {
        let cartItem = this.cartProducts.find(
            (o) => o.product.id === item.id
        );
        if (cartItem) {
            cartItem.count++;
        } else {
            cartItem = new CartItem(item, 1);
            this.cartProducts.push(cartItem);
        }
        cartItem.product.availableCount--;
        this.communicator.publishData(item);
        this.updateCartData();
    }

    removeProduct(item: CartItem) {
        item.product.availableCount += item.count;
        this.cartProducts.splice(
            this.cartProducts.findIndex((o) => o === item),
            1
        );
        this.communicator.publishData(item.product);
        this.updateCartData();
    }

    increaseQuantity(item: CartItem) {
        item.count++;
        item.product.availableCount--;
        this.communicator.publishData(item.product);
        this.updateCartData();
    }

    decreaseQuantity(item: CartItem) {
        item.count--;
        item.product.availableCount++;
        this.communicator.publishData(item.product);
        this.updateCartData();
    }
    buyAllProducts(): void {
        this.cartProducts = [];
        this.localStorageService.setItem('CART_PRODUCTS', this.cartProducts);
        this.totalQuantity = 0;
    }

    hasCartProducts(): boolean {
        return this.cartProducts.length > 0;
    }
}
