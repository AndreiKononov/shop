import { Component, Inject, OnInit, Optional } from '@angular/core';

import {
    APP_INFO,
    ConfigOptionsService,
    ConstantsService,
    GeneratorFactory,
    GeneratedString,
    LocalStorageService,
} from 'src/app/core/services';
import { AppInfo } from '../../../core/models/AppInfo/app-info.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
        { provide: ConfigOptionsService, useClass: ConfigOptionsService },
        { provide: APP_INFO, useValue: ConstantsService },
        // хотелось бы, чтобы у функции была зависимость на сервис и тут появился бы массив deps
        { provide: GeneratedString, useFactory: GeneratorFactory(20) },
    ]
})

export class AboutComponent implements OnInit {

    constructor(
        @Optional() public localStorageService: LocalStorageService,
        @Optional() public configOptionsService: ConfigOptionsService,
        @Inject(APP_INFO) @Optional() public config: AppInfo,
        @Inject(GeneratedString) public generator: any[]
    ) {
    }

    ngOnInit(): void {
        this.localStorageService.setItem('TEST', 'TEST VALUE');

        this.configOptionsService.setData({
            id: 1,
            login: 'Anna',
            email: 'anna@example.com',
        });
    }
}
