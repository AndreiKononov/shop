import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import {
    CartItemComponent,
    CartListComponent
} from './components';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { LocalStorageService } from '../core/services';

@NgModule({
    declarations: [  CartItemComponent, CartListComponent ],
    imports: [ SharedModule, ReactiveFormsModule ],
    exports: [  CartListComponent, CartRoutingModule ],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
    ],
})
export class CartModule {
}
