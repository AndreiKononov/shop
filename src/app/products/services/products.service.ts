import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { mockedBooks } from './products.constants';

const dataObservable: Observable<Product[]> = of(mockedBooks);

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    products$: Observable<Product[]> = dataObservable;

    constructor() {
    }

    getProducts(): Observable<Product[]> {
        return this.products$;
    }

    updateProduct(product: Product): void {
        const index = mockedBooks.findIndex((p) => p.id === product.id);

        if (index > -1) {
            mockedBooks.splice(index, 1, product);
        }
    }

    createProduct(product: Product): void {
        product.id = '' + new Date().getTime();
        mockedBooks.push(product);
    }

    deleteProduct(product: Product): void {
        const index = mockedBooks.findIndex((p) => p.id === product.id);

        if (index > -1) {
            mockedBooks.splice(index, 1);
        }
    }

    getProduct(id: number | string): Observable<Product> {
        return this.products$.pipe(
            map((products: Product[]) =>
                products.find((product) => product.id === id)
            ),
            catchError((err) => throwError('Error'))
        );
    }
}
