import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppSettings, LocalStorageService, TimingInterceptor } from 'src/app/core';


describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                LayoutModule,
                HttpClientTestingModule,
            ],
            providers: [{
                provide: HTTP_INTERCEPTORS,
                useClass: TimingInterceptor,
                multi: true
            }, {
                provide: AppSettings,
                useClass: AppSettings
            }, {
                provide: LocalStorageService,
                useClass: LocalStorageService
            }],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
