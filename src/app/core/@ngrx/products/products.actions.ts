import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../../products/models/product.model';

export const getProducts = createAction(
    '[Product List Page (App)] GET_PRODUCTS'
);

export const getProductsSuccess = createAction(
    '[Get Products Effect] GET_PRODUCTS_SUCCESS',
    props<{ products: ProductModel[] }>()
);
export const getProductsError = createAction(
    '[Get Products Effect] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);

// ====

export const getProduct = createAction(
    '[Add/Edit Product Page] GET_PRODUCT',
    props<{ productID: number }>()
);
export const getProductSuccess = createAction(
    '[Get Product Effect] GET_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);
export const getProductError = createAction(
    '[Get Product Effect] GET_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

// ====

export const updateProduct = createAction(
    '[Product Form Page] UPDATE_PRODUCT',
    props<{ product: ProductModel }>()
);

export const updateProductSuccess = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);
export const updateProductError = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

// ====

export const createProduct = createAction(
    '[Manage Products Page] CREATE_PRODUCT',
    props<{ product: ProductModel }>()
);
export const createProductSuccess = createAction(
    '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);
export const createProductError = createAction(
    '[Create Product Effect] CREATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

// ====

export const deleteProduct = createAction(
    '[Manage Products Page] DELETE_PRODUCT',
    props<{ product: ProductModel }>()
);
export const deleteProductSuccess = createAction(
    '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);
export const deleteProductError = createAction(
    '[Delete Product Effect] DELETE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

// ====

export const buyProduct = createAction(
    '[Product List Page] BUY_PRODUCT',
    props<{ product: ProductModel }>()
);
export const returnProduct = createAction(
    '[Cart Page] RETURN_PRODUCT',
    props<{ product: ProductModel }>()
);

export const setOriginalProduct = createAction(
    '[Product Form Page (App)] SET_ORIGINAL_PRODUCT',
    props<{ product: ProductModel }>()
);
export const changeCountProductSuccess = createAction(
    '[Change Count Product Effect] CHANGE_COUNT_PRODUCT_SUCCESS',
    props<{ product: ProductModel }>()
);


