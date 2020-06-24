import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './components';
import { CartStatePreloadingGuard } from './guards/cart-state-preloading.guard';

const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent,
        canActivate: [CartStatePreloadingGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CartRoutingModule {}
