import { InjectionToken } from '@angular/core';

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const GeneratedString = new InjectionToken<string>('GeneratedString');

function getRandomChar() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

function GeneratorService(n: number): string {
    return Array.from({ length: n }, getRandomChar).join('');
}

function GeneratorFactory(n: number) {
    return GeneratorService.bind(null, n);
}

export { GeneratedString, GeneratorFactory };
