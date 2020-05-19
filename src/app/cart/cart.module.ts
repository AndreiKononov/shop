import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartItemComponent, CartListComponent } from './components';


@NgModule({
  declarations: [ CartComponent, CartItemComponent, CartListComponent ],
  imports: [ CommonModule ],
  exports: [ CartComponent ],
})
export class CartModule { }
