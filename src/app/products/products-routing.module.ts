import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
} from '.';

const routes: Routes = [
    {
        path: 'products-list',
        component: ProductListComponent,
    },
    {
        path: 'product/:productID',
        component: ProductDetailsComponent,
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
