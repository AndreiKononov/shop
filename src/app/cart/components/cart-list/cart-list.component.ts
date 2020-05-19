import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../products/services/products.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {
    products: Array<CartItem>;

    constructor(
        private productService: ProductService,
        private cartService: CartService,
    ) {
    }

    ngOnInit(): void {
        this.products = this.cartService.getCartItems();
    }

    resetCart(): void {
        this.cartService.resetCart();
    }
}
