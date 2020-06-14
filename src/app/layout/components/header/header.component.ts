import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cartItem.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    cartItems: CartItem[];
    @ViewChild('appTitle') titleTag: ElementRef<HTMLElement>;

    constructor(
        private cartService: CartService,
    ) {
    }

    ngOnInit(): void {
        this.cartItems = this.cartService.getCartItems();
    }

    getTotalQuantity(): number {
        return this.cartService.totalQuantity;
    }

    ngAfterViewInit() {
        this.titleTag.nativeElement.innerText = 'My shop';
    }
}
