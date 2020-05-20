import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import { ProductService } from '../../../products/services/products.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';
import { Subscription } from 'rxjs';

const HOVER_COLOR = 'beige';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit, OnDestroy {
    private products$: Subscription;
    products: Array<CartItem>;
    HOVER_COLOR = HOVER_COLOR;

    constructor(
        private productService: ProductService,
        private cartService: CartService,
    ) {
    }

    ngOnInit(): void {
        this.products$ = this.cartService.productsSubject.subscribe(products => {
            this.products = products;
        });
    }

    ngOnDestroy(): void {
        this.products$.unsubscribe();
    }

    onIncrease(product: CartItem) {
        this.cartService.increaseAmount(product);
    }

    onDecrease(product: CartItem) {
        this.cartService.decreaseAmount(product);
    }

    getTotalCost() {
        return this.cartService.getTotalCost();
    }

    resetCart(): void {
        this.cartService.resetCart();
    }
}
