import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../core/services';
import { AppSettingsModel } from '../../../core/models';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    isDarkTheme: boolean;

    constructor(private route: ActivatedRoute, private appSettings: AppSettings) {}

    ngOnInit(): void {

        this.setIsDarkTheme(this.appSettings.settings);
        this.appSettings.channel$.subscribe(this.setIsDarkTheme.bind(this));

        this.sessionId = this.route.queryParamMap.pipe(
            map((params) => params.get('sessionId') || 'None')
        );

        this.token = this.route.fragment.pipe(
            map((fragment) => fragment || 'None')
        );
    }

    setIsDarkTheme(settings: AppSettingsModel): void {
        this.isDarkTheme = settings.THEME === 'DARK';
    }
}
