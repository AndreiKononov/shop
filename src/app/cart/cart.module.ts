import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import {
    CartComponent,
    CartHeaderComponent,
    CartItemComponent,
    CartListComponent
} from './components';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './components/cart/cart-routing.module';
import { LocalStorageService } from '../core/services';

@NgModule({
    declarations: [ CartComponent, CartItemComponent, CartListComponent, CartHeaderComponent ],
    imports: [ SharedModule, ReactiveFormsModule ],
    exports: [ CartComponent, CartListComponent, CartRoutingModule ],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
    ],
})
export class CartModule {
}
