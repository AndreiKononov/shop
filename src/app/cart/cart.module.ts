import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import {
    CartComponent,
    CartHeaderComponent,
    CartItemComponent,
    CartListComponent
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ CartComponent, CartItemComponent, CartListComponent, CartHeaderComponent ],
    imports: [ SharedModule, ReactiveFormsModule ],
    exports: [ CartComponent ],
})
export class CartModule {
}
