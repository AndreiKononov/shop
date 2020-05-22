import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import { ProductService } from '../../../products/services/products.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit, OnDestroy {
    private products$: Subscription;
    products: Array<CartItem>;

    constructor(
        private productService: ProductService,
        private cartService: CartService,
    ) {
    }

    ngOnInit(): void {
        console.log('ngOnInit');
        this.products$ = this.cartService.productsSubject.subscribe(products => {
            this.products = products;
        });
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
        this.products$.unsubscribe();
    }

    onIncrease(product: CartItem) {
        console.log('onIncrease');
        this.cartService.increaseAmount(product);
    }

    onDecrease(product: CartItem) {
        console.log('onDecrease');
        this.cartService.decreaseAmount(product);
    }

    getTotalCost() {
        console.log('getTotalCost');
        return this.cartService.getTotalCost();
    }

    resetCart(): void {
        console.log('resetCart');
        this.cartService.resetCart();
    }
}
