import {Component, EventEmitter, Input, Output} from '@angular/core';

import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

    @Input() product: CartItem;

    @Output() increase = new EventEmitter<CartItem>();
    @Output() decrease = new EventEmitter<CartItem>();

    onIncrease() {
        this.increase.emit(this.product);
    }

    onDecrease() {
        this.decrease.emit(this.product);
    }

}
