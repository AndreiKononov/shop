import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CanComponentDeactivate} from '../../../core/interfaces';
import { Product } from '../../models/product.model';
import { Category } from '../../enums/category';
import { DialogService } from 'src/app/core';
import { ProductService } from '../../services/products.service';
import { ProductModule } from '../../product.module';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
    product: Product;
    originalProduct: ProductModule;
    Category = Category;
    selectedCategory: string;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.route.data
            .pipe(pluck('product'))
            .subscribe((product: Product) => {
                this.product = { ...product } as Product;
                this.originalProduct = { ...product } as Product;
            });
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
        const product = { ...this.product } as Product;
        product.category = Category[product.category] || product.category;
        if (product.id) {
            this.productService.updateProduct(product);
        } else {
            this.productService.createProduct(product);
        }
        this.originalProduct = { ...this.product };
        this.onGoBack();
    }

    onDelete() {
        const product = { ...this.product } as Product;

        if (product.id) {
            this.productService.deleteProduct(product);
        }
    }

    onGoBack(): void {
        this.router.navigate(['/admin/products']);
    }

    compareCategories(o1: string, o2: string): boolean {
        return Category[o1] === o2;
    }
}
