import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverDirective, ZoomDirective } from './directives';

@NgModule({
    declarations: [ HoverDirective, ZoomDirective ],
    imports: [ CommonModule ],
    exports: [ HoverDirective, ZoomDirective ],
})
export class SharedModule {
}
