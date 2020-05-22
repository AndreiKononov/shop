import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    cartItems: CartItem[];

    constructor(
        private  cartService: CartService
    ) {
    }

    ngOnInit(): void {
        this.cartItems = this.cartService.getCartItems();
    }
}
