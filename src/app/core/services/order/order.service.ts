import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from 'src/app/core/models';
import { CartItem } from '../../../cart/models/cartItem.model';
import { OrdersAPI } from './orders.config';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(
        private http: HttpClient,
        @Inject(OrdersAPI) private ordersUrl: string,
    ) {
    }

    createOrder(
        cartProducts: CartItem[],
        totalQuantity: number,
        total: number
    ): Promise<Order> {
        const order = {
            id: '' + new Date().getTime(),
            date: new Date(),
            cartProducts: {...cartProducts},
            totalQuantity,
            total,
        } as Order;
        const url = this.ordersUrl;
        const body = JSON.stringify(order);
        const options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
        };
        return this.http
            .post(url, body, options)
            .toPromise()
            .then((response) => response as Order)
            .catch(this.handleError);
    }

    getOrders(): Promise<Order[]> {
        return this.http
            .get(this.ordersUrl)
            .toPromise()
            .then((response) => {
                return response as Order[];
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
