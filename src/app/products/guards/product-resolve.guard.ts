import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

import { ProductModule } from '../product.module';
import { ProductService } from '../services/products.service';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<ProductModule> {
    constructor(
        private productsService: ProductService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ProductModule | null> {
        if (!route.paramMap.has('productID')) {
            return of(new ProductModule());
        }

        const id = route.paramMap.get('productID');

        return this.productsService.getProduct(id).pipe(
            map((product: Product) => {
                if (product) {
                    return product;
                } else {
                    this.router.navigate(['/admin/products']);
                    return null;
                }
            }),
            take(1),
            catchError(() => {
                this.router.navigate(['/admin/products']);
                return of(null);
            })
        );
    }
}
