import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../../products/models/product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    products: Array<Product>;

    constructor(
        private productService: CartService
    ) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts().filter(product => product.selected !== 0);
    }

}
