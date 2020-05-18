import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/components/cart.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        FirstComponent,
        ProductComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
