import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
        FormsModule
    ],
})
export class SharedModule {
}
