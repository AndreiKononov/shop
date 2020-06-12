import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent, OrderItemComponent, OrderListComponent } from './componenets';

@NgModule({
    declarations: [ ProcessOrderComponent, OrderItemComponent, OrderListComponent ],
    imports: [ SharedModule, OrdersRoutingModule ],
    exports: [OrderListComponent, OrdersRoutingModule],
})
export class OrdersModule {

}
