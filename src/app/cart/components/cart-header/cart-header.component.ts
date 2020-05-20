import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit, AfterViewInit {

    products: Array<CartItem>;
    @ViewChild('appTitle') titleTag: ElementRef<HTMLInputElement>;

    constructor(
        private productService: CartService,
    ) {
    }

    ngOnInit(): void {
        this.products = this.productService.getCartItems();
    }

    ngAfterViewInit() {
        this.titleTag.nativeElement.innerText = 'My shop';
    }
}
