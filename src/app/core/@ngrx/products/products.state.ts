import { ProductModel } from '../../../products/models/product.model';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<ProductModel>{
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

function selectProductId(product: ProductModel): string {
    return product.id;
}

function sortProductsByName(product1: ProductModel, product2: ProductModel): number {
    return product1.name.localeCompare(product2.name);
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>({
    selectId: selectProductId,
    sortComparer: sortProductsByName
});

export const initialProductsState: ProductsState = adapter.getInitialState({
    loading: false,
    loaded: false,
    error: null
});
