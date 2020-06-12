import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent, LoginComponent, PathNotFoundComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ AboutComponent, LoginComponent, PathNotFoundComponent ],
    imports: [ SharedModule, RouterModule ],
    exports: [ AboutComponent, LoginComponent, PathNotFoundComponent ],
})

export class LayoutModule { }
