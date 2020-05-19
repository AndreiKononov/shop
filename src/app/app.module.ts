import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { FirstComponent } from './first/first.component';
import { ProductModule } from './products/product.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductModule,
        CartModule,
        OrdersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
