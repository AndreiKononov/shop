import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, take, tap, delay } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { ProductModule } from '../../products/product.module';
import { AppState, selectSelectedProductByUrl } from 'src/app/core/@ngrx';
import { Product } from '../../products/models/product.model';
import * as ProductsActions from 'src/app/core/@ngrx/products/products.actions';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';

@Injectable({
    providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<ProductModule> {
    constructor(
        private store: Store<AppState>,
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
        return this.store.pipe(
            select(selectSelectedProductByUrl),
            tap(product => this.store.dispatch(ProductsActions.setOriginalProduct({ product }))),
            delay(1000),
            map((product: Product) => {
                if (product) {
                    return product;
                } else {
                    RouterActions.go({ path: ['/admin/products'] });
                    return null;
                }
            }),
            take(1),
            catchError(() => {
                RouterActions.go({ path: ['/admin/products'] });
                return of(null);
            })
        );
    }
}
