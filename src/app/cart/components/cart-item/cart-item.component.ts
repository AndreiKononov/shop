import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Product } from '../../../products/models/product.model';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
    @Input() product: Product;

}
