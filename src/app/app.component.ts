import { Component, OnInit } from '@angular/core';
import { AppSettingsModel } from './core/models';
import { AppSettings } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    isDarkTheme: boolean;
    constructor(private appSettings: AppSettings) { }

    ngOnInit(): void {
        this.setIsDarkTheme(this.appSettings.settings);
        this.appSettings.channel$.subscribe(this.setIsDarkTheme.bind(this));
    }

    setIsDarkTheme(settings: AppSettingsModel): void {
        this.isDarkTheme = settings.THEME === 'DARK';
    }
}
