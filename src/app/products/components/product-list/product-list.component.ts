import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState,ProductsState } from '../../../core/@ngrx';

import {Product, ProductModel} from '../../models/product.model';
import * as ProductAction from './../../../core/@ngrx/products/products.actions'
// import { ProductService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    // products: Observable<Product[]>;
    productState$: Observable<ProductsState>;
    @Input() editable: boolean;

    constructor(
        // public productService: ProductService,
        public cartService: CartService,
        public router: Router,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        console.log('We have a store! ', this.store);
        // this.products = this.productService.getProducts();
        this.productState$ = this.store.pipe(select('products'));
        this.store.dispatch(ProductAction.getProducts());
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
        const productToDelete: ProductModel = { ...product };
        this.store.dispatch(ProductAction.deleteProduct({ product: productToDelete }));
    }
}
