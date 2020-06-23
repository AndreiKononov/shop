import { select, Store } from '@ngrx/store';
import { AppState, selectProductLoaded } from 'src/app/core/@ngrx';
import * as ProductsActions from 'src/app/core/@ngrx/products/products.actions';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

export function checkProductsStore(store: Store<AppState>): Observable<boolean> {
    return store.pipe(
        select(selectProductLoaded),
        tap((loaded: boolean) => {
            if (!loaded) {
                store.dispatch(ProductsActions.getProducts());
            }
        }),
        filter((loaded: boolean) => loaded),
        take(1)
    );
}
