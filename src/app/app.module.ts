import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FistModule } from './first/fist.module';
import { ProductModule } from './products/product.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { TimingInterceptor } from 'src/app/core/interceptors';

@NgModule({
    declarations: [ AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FistModule,
        ProductModule,
        CartModule,
        OrdersModule,
        SharedModule,
        LayoutModule,
        AdminModule,
        AppRoutingModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor,
        multi: true
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
