import { Injectable } from '@angular/core';
import { OrderModel, OrderStatus } from 'src/app/core/models';
import { CartItem } from '../../../cart/models/cartItem.model';
import { CartService } from '../../../cart/services/cart.service';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    orders: OrderModel[] = [];

    constructor(public cartService: CartService) {}

    createOrder(
        cartProducts: CartItem[],
        totalQuantity: number,
        total: number
    ) {
        this.orders.push({
            id: '' + new Date().getTime(),
            date: new Date(),
            status: OrderStatus.OPEN,
            cartProducts: { ...cartProducts },
            totalQuantity,
            total,
        } as OrderModel);
    }
}
