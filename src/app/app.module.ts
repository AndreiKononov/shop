import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/components/cart.component';
import { FirstComponent } from './first/first.component';
import { ProductModule } from './products/product.module';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        FirstComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
