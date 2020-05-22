import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {
    cartItems: CartItem[];

    constructor(
        private cartService: CartService,
    ) {}

    ngOnInit(): void {
        this.cartItems = this.cartService.getCartItems();
    }

    getTotalSum(): number {
        return this.cartService.totalSum;
    }
}
