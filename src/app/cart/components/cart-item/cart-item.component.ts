import {Component, EventEmitter, Input, Output} from '@angular/core';

import { CartItem } from '../../models/cartItem.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

    @Input() product: CartItem;

    constructor(
        public cartService: CartService,
    ) {}

    onRemoveProduct(): void {
        this.cartService.removeProduct(this.product);
    }

    onIncreaseQuantity(): void {
        this.cartService.increaseAmount(this.product);
    }
    onDecreaseQuantity(): void {
        this.cartService.decreaseAmount(this.product);
    }
}
