import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartHeaderComponent, CartItemComponent, CartListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ CartComponent, CartItemComponent, CartListComponent, CartHeaderComponent ],
    imports: [ CommonModule, SharedModule ],
    exports: [ CartComponent ],
})
export class CartModule {
}
