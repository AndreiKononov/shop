import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GeneratedString = new InjectionToken<string>('GeneratedString');

export function GeneratorFactory(n: number) {

    return (data: GeneratorService): string =>
        Array.from({ length: n }, data.getRandomChar).join('');
}
