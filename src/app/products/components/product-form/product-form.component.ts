import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { CanComponentDeactivate } from '../../../core/interfaces';
import { Product } from '../../models/product.model';
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

    private sub: Subscription;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService,
        private location: Location
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
        if (this.sub) {
            this.sub.unsubscribe();
        }
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
        const method = this.product.id ? 'updateProduct' : 'createProduct';

        const observer = {
            next: (savedProduct: Product) => {
                this.originalProduct = { ...savedProduct };
                this.onGoBack();
            },
            error: (err: any) => console.log(err),
        };
        this.sub = this.productService[method](this.product).subscribe(
            observer
        );
    }

    onGoBack(): void {
        this.location.back();
    }

    compareCategories(o1: string, o2: string): boolean {
        return o1 === o2;
    }
}
