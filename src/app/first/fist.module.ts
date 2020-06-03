import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FirstComponent } from './components';

@NgModule({
    declarations: [ FirstComponent ],
    imports: [ SharedModule ],
    exports: [ FirstComponent ],
})
export class FistModule {
}
