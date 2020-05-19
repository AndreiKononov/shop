import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

    products: Array<CartItem>;

    constructor(
        private productService: CartService
    ) {
    }

    ngOnInit(): void {
        this.products = this.productService.getCartItems();
    }
}
