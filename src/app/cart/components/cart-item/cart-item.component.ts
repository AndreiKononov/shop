import { Component, Input } from '@angular/core';

import { CartItem } from '../../models/cartItem.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {

    @Input() cartItem: CartItem;

    constructor(
        public cartService: CartService,
    ) {}

    onRemoveCartItem(): void {
        this.cartService.removeCartItem(this.cartItem);
    }

    onIncreaseQuantity(): void {
        this.cartService.increaseAmount(this.cartItem);
    }
    onDecreaseQuantity(): void {
        this.cartService.decreaseAmount(this.cartItem);
    }
}
