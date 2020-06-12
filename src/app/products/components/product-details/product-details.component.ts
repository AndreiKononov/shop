import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    @Input() product: Product = {} as Product;

    constructor(
        public productsService: ProductService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const observer = {
            next: (product: Product) => {
                this.product = { ...product } as Product;
            },
            error: (err: any) => console.log(err),
        };
        this.route.paramMap
            .pipe(
                switchMap((params: ParamMap) =>
                    this.productsService.getProduct(params.get('productID'))
                )
            )
            .subscribe(observer);
    }
}
