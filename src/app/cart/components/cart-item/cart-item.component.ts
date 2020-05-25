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
        // не надо сюда внедрять сервис.
        // компонент не владеет данными, он их получает и не должен менять.
        // пусть генерит аутпут для родителя, а то меняет, тем более, что в родитель уже внедряется эта зависимость
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
