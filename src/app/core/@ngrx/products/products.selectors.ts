import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import { selectRouterState } from '../router';
import { Product } from '../../../products/models/product.model';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const selectSelectedProductByUrl = createSelector(
    selectProductsData,
    selectRouterState,
    (products, router): Product => {
        const productID = router.state.params.productID;
        if (productID) {
            return products[productID] as Product;
        } else {
            return {
                name: '',
                description: '',
                price: null,
                availableCount: null,
                category: null
            } as Product;
        }
    });
