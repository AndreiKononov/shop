import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../products/services/products.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

const HOVER_COLOR = 'beige';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {

    products: Array<CartItem>;
    HOVER_COLOR = HOVER_COLOR;

    constructor(
        private productService: ProductService,
        private cartService: CartService,
    ) {
    }

    ngOnInit(): void {
        this.products = this.cartService.getCartItems();
    }

    getTotalCost() {
        return this.cartService.getTotalCost();
    }

    resetCart(): void {
        this.cartService.resetCart();
    }
}
