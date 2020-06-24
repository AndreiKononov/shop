import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectCartData, selectCartState, selectTotalQuantity, selectTotalSum } from './cart.selectors';
import * as CartActions from './cart.actions';

import { Observable } from 'rxjs';

import { CartItem } from '../../../cart/models/cartItem.model';
import { CartState } from './cart.state';
import { Product } from '../../../products/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartFacade {
    cartProducts$: Observable<ReadonlyArray<CartItem>>;
    totalQuantity$: Observable<number>;
    totalSum$: Observable<number>;
    cartState$: Observable<CartState>;

    constructor(private store: Store<AppState>) {
        this.cartProducts$ = this.store.pipe(select(selectCartData));
        this.totalQuantity$ = this.store.pipe(select(selectTotalQuantity));
        this.totalSum$ = this.store.pipe(select(selectTotalSum));
        this.cartState$ = this.store.pipe(select(selectCartState));
    }


    addProduct(props: { product: Product }) {
        this.store.dispatch(CartActions.addProduct(props));
    }

    removeProduct(props: { cartItem: CartItem }) {
        this.store.dispatch(CartActions.removeProduct(props));
    }

    increaseQuantity(props: { cartItem: CartItem }) {
        this.store.dispatch(CartActions.increaseQuantity(props));
    }

    decreaseQuantity(props: { cartItem: CartItem }) {
        this.store.dispatch(CartActions.decreaseQuantity(props));
    }

    buyAllProducts() {
        this.store.dispatch(CartActions.buyAllProducts());
    }

    setSortName(props: { sortName: string }) {
        this.store.dispatch(CartActions.setSortName(props));
    }

    setDirection(props: { sortDirection: boolean }) {
        this.store.dispatch(CartActions.setDirection(props));
    }
}
