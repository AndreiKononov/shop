import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit, AfterViewInit {

    cartItems: CartItem[];
    @ViewChild('appTitle') titleTag: ElementRef<HTMLInputElement>; // Почему такой тип, разве это инпут? HTMLElement или HTMLHeadingElement

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
