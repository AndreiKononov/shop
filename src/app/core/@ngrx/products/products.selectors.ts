import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, adapter } from './products.state';
import { selectRouterState } from '../router';
import { Product } from '../../../products/models/product.model';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
export const {
    selectEntities: selectProductsEntities,
    selectAll: selectProductsData
} = adapter.getSelectors(selectProductsState);

export const selectSelectedProductByUrl = createSelector(
    selectProductsEntities,
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
