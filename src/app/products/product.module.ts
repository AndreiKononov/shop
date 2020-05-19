import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';


@NgModule({
    declarations: [ ProductComponent, ProductListComponent ],
    imports: [ CommonModule ],
    exports: [ ProductListComponent ],
})
export class ProductModule {
}
