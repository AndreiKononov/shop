import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Observable<Product[]>;
    @Input() editable: boolean;

    constructor(
        public productService: ProductService,
        public cartService: CartService,
        public router: Router
    ) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    onBuyProduct(product: Product): void {
        this.cartService.addProduct(product);
    }

    onGoToProduct(product: Product): void {
        const link = ['/product', product.id];
        this.router.navigate(link);
    }

    onEditProduct(product: Product): void {
        const link = ['/admin/products/edit', product.id];
        this.router.navigate(link);
    }

    onDeleteProduct(product: Product): void {
        this.products = this.productService.deleteProduct(product);
    }
}
