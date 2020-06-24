import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../../products/models/product.model';
import { LocalStorageService } from '../../core/services';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    constructor(private localStorageService: LocalStorageService) {
    }

    getStorageData(): CartItem[] {
        const data = [];
        const cache = this.localStorageService.getItem('CART_PRODUCTS') as [] || [];
        cache.forEach((el: CartItem) => {
            data.push({
                product: el.product as Product,
                count: el.count as number,
            } as CartItem);
        });
        return data;
    }

    updateStorageData(cartItems: CartItem[]): void {
        this.localStorageService.setItem('CART_PRODUCTS', cartItems);
    }
}
