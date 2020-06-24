import { Action, createReducer, on } from '@ngrx/store';

import { CartState, initialCartState } from './cart.state';
import * as CartActions from './cart.actions';
import { CartItem } from '../../../cart/models/cartItem.model';
import { OrderByPipe } from '../../../shared';

const orderByPipe = new OrderByPipe();
const reducer = createReducer(
    initialCartState,
    on(CartActions.setCartProducts, state => {
        console.log('SET_CART_PRODUCTS action being handled!');
        return { ...state };
    }),
    on(CartActions.addProduct, (state, { product }) => {
        console.log('ADD_PRODUCT action being handled!');
        const data = [...state.data];
        let cartItem;
        const index = data.findIndex(o => o.product.id === product.id);
        if (index > -1) {
            const updatedCartItem = { ...data[index] };
            const updatedProduct = { ...updatedCartItem.product };
            updatedProduct.availableCount--;
            updatedCartItem.count++;
            updatedCartItem.product = updatedProduct;
            data[index] = updatedCartItem;
        } else {
            const updatedProduct = { ...product };
            updatedProduct.availableCount--;
            cartItem = {
                product: updatedProduct,
                count: 1,
            } as CartItem;
            data.push(cartItem);
        }
        return {
            ...state,
            data,
            totalQuantity: data.reduce((prev, cur) => prev + cur.count, 0),
            totalSum: data.reduce((prev, cur) => prev + cur.count * cur.product.price, 0)
        };
    }),
    on(CartActions.removeProduct, (state, { cartItem }) => {
        console.log('REMOVE_PRODUCT action being handled!');
        const data = [...state.data];
        const index = data.findIndex(o => o.product.id === cartItem.product.id);
        data.splice(index, 1);
        return {
            ...state,
            data,
            totalQuantity: data.reduce((prev, cur) => prev + cur.count, 0),
            totalSum: data.reduce((prev, cur) => prev + cur.count * cur.product.price, 0)
        };
    }),
    on(CartActions.increaseQuantity, (state, { cartItem }) => {
        console.log('INCREASE_QUANTITY action being handled!');
        const data = [...state.data];
        const index = data.findIndex(o => o.product.id === cartItem.product.id);
        const updatedCartProduct = { ...data[index] };
        const updatedProduct = { ...updatedCartProduct.product };
        updatedProduct.availableCount--;
        updatedCartProduct.count++;
        updatedCartProduct.product = updatedProduct;
        data[index] = updatedCartProduct;
        return {
            ...state,
            data,
            totalQuantity: data.reduce((prev, cur) => prev + cur.count, 0),
            totalSum: data.reduce((prev, cur) => prev + cur.count * cur.product.price, 0)
        };
    }),
    on(CartActions.decreaseQuantity, (state, { cartItem }) => {
        console.log('DECREASE_QUANTITY action being handled!');
        const data = [...state.data];
        const index = data.findIndex(o => o.product.id === cartItem.product.id);
        const updatedCartProduct = { ...data[index] };
        const updatedProduct = { ...updatedCartProduct.product };
        updatedProduct.availableCount++;
        updatedCartProduct.count--;
        updatedCartProduct.product = updatedProduct;
        data[index] = updatedCartProduct;
        return {
            ...state,
            data,
            totalQuantity: data.reduce((prev, cur) => prev + cur.count, 0),
            totalSum: data.reduce((prev, cur) => prev + cur.count * cur.product.price, 0)
        };
    }),
    on(CartActions.buyAllProducts, state => {
        console.log('BUY_ALL_PRODUCTS action being handled!');
        const data = [];
        return {
            ...state,
            data,
            totalQuantity: 0,
            totalSum: 0
        };
    }),
    on(CartActions.saveCartProducts, state => {
        console.log('SAVE_CART_PRODUCTS action being handled!');
        return { ...state };
    }),
    on(CartActions.setSortName, (state, { sortName }) => {
        console.log('SET_SORT_NAME action being handled!');
        const data = orderByPipe.transform([...state.data], sortName, state.sortDirection);
        return { ...state, data, sortName };
    }),
    on(CartActions.setDirection, (state, { sortDirection }) => {
        console.log('SET_DIRECTION action being handled!');
        const data = orderByPipe.transform([...state.data], state.sortName, sortDirection);
        return { ...state, data, sortDirection };
    }),
    on(CartActions.saveCartProductsSuccess, state => {
        console.log('SAVE_CART_PRODUCTS_SUCCESS action being handled!');
        return { ...state };
    }),
    on(CartActions.setCartProductsSuccess, (state, { cartItems }) => {
        console.log('SET_CART_PRODUCTS_SUCCESS action being handled!');
        const data = [...cartItems];
        return {
            ...state,
            data
        };
    }),
    on(CartActions.getCartProducts, state => {
        console.log('GET_CART_PRODUCTS action being handled!');
        return { ...state };
    }),
    on(CartActions.getCartProductsSuccess, (state, { cartItems }) => {
        console.log('GET_CART_PRODUCTS_SUCCESS action being handled!');
        const data = [...cartItems];
        return {
            ...state,
            data,
            totalQuantity: data.reduce((prev, cur) => prev + cur.count, 0),
            totalSum: data.reduce((prev, cur) => prev + cur.count * cur.product.price, 0),
            loaded: true,
        };
    }),
);

export function cartReducer(state: CartState | undefined, action: Action) {
    return reducer(state, action);
}
