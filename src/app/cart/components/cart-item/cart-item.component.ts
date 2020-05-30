import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {

    @Input() cartItem: CartItem;

    @Output() increaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
    @Output() decreaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
    @Output() removeCartItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

    onIncreaseQuantity(): void {
        this.increaseQuantity.emit(this.cartItem);
    }

    onDecreaseQuantity(): void {
        this.decreaseQuantity.emit(this.cartItem);
    }

    onRemoveCartItem(): void {
        this.removeCartItem.emit(this.cartItem);
    }
}
