import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

// export class ProductListComponent {
//     @Input()
//     products: Array<Product>;
//
//     @Output()
//     completeTask: EventEmitter<Product> = new EventEmitter();
//
//     onCompleteTask(task: Product): void {
//         console.log('task-list component, completeTask method', task);
//         this.completeTask.emit(task);
//     }
// }

export class ProductListComponent implements OnInit {
    products: Array<Product>;

    constructor(
        private productService: ProductService,
        // private cartService: CartService
    ) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    addToCart(product: Product) {
        // if (product.available) {
        //     this.cartService.addProduct(product);
        // }
    }

}
