import { Injectable } from '@angular/core';
import { ConfigOptions } from '../../models';

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
