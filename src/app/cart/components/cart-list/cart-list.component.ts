import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { CartFacade } from 'src/app/core/@ngrx';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})

export class CartListComponent implements OnInit {
    cartItems$: Observable<ReadonlyArray<CartItem>>;
    totalQuantity$: Observable<number>;
    totalSum$: Observable<number>;
    sortForm = new FormControl();
    sortList: string[] = ['price', 'quantity', 'name'];
    ascendingOrder: boolean = false;

    constructor(
        private cartFacade: CartFacade,
    ) {}

    ngOnInit(): void {
        this.cartItems$ = this.cartFacade.cartProducts$;
        this.totalQuantity$ = this.cartFacade.totalQuantity$;
        this.totalSum$ = this.cartFacade.totalSum$;
    }

    // changeSortName(sortName): void {
    //     this.cartFacade.setSortName({ sortName });
    // }

    changeDirection(): void {
        this.ascendingOrder = !this.ascendingOrder;
        this.cartFacade.setDirection({ sortDirection: this.ascendingOrder });
    }
}
