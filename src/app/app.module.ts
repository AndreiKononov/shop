import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FistModule } from './first/fist.module';
import { ProductModule } from './products/product.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
    declarations: [ AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FistModule,
        ProductModule,
        CartModule,
        OrdersModule,
        SharedModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
