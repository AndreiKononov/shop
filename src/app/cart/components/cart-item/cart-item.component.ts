import { Component, Input } from '@angular/core';

import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

    @Input() product: CartItem;

}
