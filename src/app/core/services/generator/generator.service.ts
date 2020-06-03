import {Injectable} from '@angular/core';

@Injectable()
export class GeneratorService {

    getRandomChar(): string {
        const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
}
