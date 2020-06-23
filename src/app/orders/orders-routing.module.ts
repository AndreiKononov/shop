import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './componenets';
import { OrdersStatePreloadingGuard } from './guards';

const routes: Routes = [
    {
        path: 'order',
        component: ProcessOrderComponent,
        canActivate: [OrdersStatePreloadingGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {}
