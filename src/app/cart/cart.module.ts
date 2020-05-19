import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartItemComponent, CartListComponent, CartHeaderComponent } from './components';

@NgModule({
  declarations: [ CartComponent, CartItemComponent, CartListComponent, CartHeaderComponent ],
  imports: [ CommonModule ],
  exports: [ CartComponent ],
})
export class CartModule { }
