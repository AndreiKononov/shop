import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry,  publish, refCount, share,  concatMap } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { ProductsAPI } from '../../core/services/products/products.config';
// import { mockedBooks } from './products.constants';

// const dataObservable: Observable<Product[]> = of(mockedBooks);

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    // products$: Observable<Product[]> = dataObservable;

    constructor(
        private http: HttpClient,
        @Inject(ProductsAPI) private productsUrl: string,
    ) {
    }

    getProducts(): Observable<Product[]> {
        return this.http
            .get<Product[]>(this.productsUrl)
            .pipe(
                retry(3),
                publish(),
                refCount(),
                catchError(this.handleError)
            );
    }

    getProduct(id: number | string): Observable<Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http
            .get<Product>(url)
            .pipe(retry(3), share(), catchError(this.handleError));
    }

    updateProduct(product: Product): Observable<Product> {
        const url = `${this.productsUrl}/${product.id}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http
            .put<Product>(url, body, options)
            .pipe(catchError(this.handleError));
    }

    createProduct(product: Product): Observable<Product> {
        const url = this.productsUrl;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .post<Product>(url, body, options)
            .pipe(catchError(this.handleError));
    }

    deleteProduct(product: Product): Observable<Product[]> {
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.delete(url).pipe(concatMap(() => this.getProducts()));
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(
                `Backend returned code ${err.status}, body was: ${err.error}`
            );
        }
        return throwError('Something bad happened; please try again later.');
    }
}
