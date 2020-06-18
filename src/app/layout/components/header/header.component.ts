
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppSettings } from 'src/app/core/services';
import { CartService } from '../../../cart/services/cart.service';

import { AppSettingsModel, AppTheme } from 'src/app/core/models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isDarkTheme: boolean;

    @ViewChild('appTitle') titleTag: ElementRef<HTMLElement>;

    constructor(
        private appSettings: AppSettings,
        private cartService: CartService,
    ) { }

    ngOnInit(): void {
        this.setIsDarkTheme(this.appSettings.settings);
        this.appSettings.channel$.subscribe(this.setIsDarkTheme.bind(this));
    }

        getTotalQuantity(): number {
        return this.cartService.totalQuantity;
    }

    ngAfterViewInit() {
        this.titleTag.nativeElement.innerText = 'My shop';
    }

    setIsDarkTheme(settings: AppSettingsModel): void {
        this.isDarkTheme = settings.THEME === 'DARK';
    }


    toggleDarkTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this.appSettings.setTheme(this.isDarkTheme ? AppTheme.DARK : AppTheme.LIGHT);
    }
}
