import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
} from '.';

import { ProductsStatePreloadingGuard, ProductExistsGuard } from './guards';

const routes: Routes = [
    {
        path: 'products-list',
        component: ProductListComponent,
        canActivate: [ProductsStatePreloadingGuard],
    },
    {
        path: 'product/:productID',
        component: ProductDetailsComponent,
        canActivate: [ProductExistsGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {
    static components = [
        ProductComponent,
        ProductDetailsComponent,
        ProductListComponent,
        ProductFormComponent,
    ];
}
