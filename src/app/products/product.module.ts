import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule} from './products-routing.module';

@NgModule({
    declarations: [ ProductRoutingModule.components ],
    imports: [ SharedModule ],
    exports: [ ProductRoutingModule, ProductRoutingModule.components ],
})
export class ProductModule {
}
