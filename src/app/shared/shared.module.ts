import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidatorsModule } from './validators/validators.module';

import { HoverDirective, ZoomDirective, OrderByPipe } from './index';

@NgModule({
    declarations: [
        HoverDirective,
        ZoomDirective,
        OrderByPipe
    ],
    exports: [
        CommonModule,
        HoverDirective,
        ZoomDirective,
        OrderByPipe,
        FormsModule,
        ValidatorsModule
    ],
})
export class SharedModule {
}
