import { Injectable } from '@angular/core';
import { ConfigOptions } from '../../models/config-options/config-options.model';

@Injectable({
  providedIn: 'root'
})

export class ConfigOptionsService {

    constructor() {}

    private config: ConfigOptions;

    setData(config: ConfigOptions) {
        this.config = { ...this.config, ...config };
    }

    getData(): ConfigOptions {
        return this.config;
    }
}
