import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Location } from '@angular/common';

import { pluck, takeUntil } from 'rxjs/operators';
import { Observable, Subscription, Subject } from 'rxjs';

// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from '../../../core/@ngrx';
import * as ProductActions from './../../../core/@ngrx/products/products.actions';

import { CanComponentDeactivate } from '../../../core/interfaces';
import { Product, ProductModel } from '../../models/product.model';
import { Category } from '../../enums/category';
import { DialogService } from 'src/app/core';
import { ProductService } from '../../services/products.service';
import { ProductModule } from '../../product.module';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate, OnDestroy {
    product: Product;
    originalProduct: ProductModule;
    Category = Category;
    selectedCategory: string;
    private componentDestroyed$: Subject<void> = new Subject<void>();

    private sub: Subscription;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService,
        private location: Location,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.route.data
            .pipe(pluck('product'))
            .subscribe((product: Product) => {
                this.product = { ...product } as Product;
                this.originalProduct = { ...product } as Product;
            });
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = Object.keys(this.product).map((key) => {
            if (this.originalProduct[key] === this.product[key]) {
                return true;
            }
            return false;
        });
        if (flags.every((el) => el)) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

    onSave() {
        const product = { ...this.product } as ProductModel;
        if (product.id) {
            this.store.dispatch(ProductActions.updateProduct({ product }));
        } else {
            this.store.dispatch(ProductActions.createProduct({ product }));
        }
    }

    onGoBack(): void {
        this.location.back();
    }

    compareCategories(o1: string, o2: string): boolean {
        return o1 === o2;
    }
}
