import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent, LoginComponent, PathNotFoundComponent, HeaderComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ AboutComponent, LoginComponent, PathNotFoundComponent, HeaderComponent ],
    imports: [ SharedModule, RouterModule ],
    exports: [ AboutComponent, LoginComponent, PathNotFoundComponent, HeaderComponent ],
})

export class LayoutModule { }
