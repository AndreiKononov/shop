import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NgRx
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { routerReducers, CustomSerializer, RouterEffects } from './router';

import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(routerReducers, {
            // All checks will automatically be disabled in production builds
            runtimeChecks: {
                strictStateImmutability: true, // default value is true
                strictActionImmutability: true, // default value is true
                strictStateSerializability: true, // default value is false
                strictActionSerializability: false, // default value is false
                strictActionWithinNgZone: true // default value is false
            }
        }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            // routerState: RouterState.Minimal
            serializer: CustomSerializer // has a priority over routerState
        }),
        EffectsModule.forRoot([RouterEffects]),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        ProductsStoreModule,
    ]
})
export class RootStoreModule { }
