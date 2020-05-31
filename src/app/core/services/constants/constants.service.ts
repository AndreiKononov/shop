import { InjectionToken } from '@angular/core';

import { AppInfo } from '../../models/AppInfo/app-info.model';

export const APP_INFO = new InjectionToken<AppInfo>('App info');

export const ConstantsService: AppInfo  = {
    App: 'Shop',
    Ver: '1.0',
};
