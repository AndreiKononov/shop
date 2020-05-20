import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]',
})
export class HoverDirective {

    @HostBinding('class')
    attrClass: string;

    constructor() {}

    @HostListener('mouseenter', ['$event'])
    enter() {
        console.log('mouseenter event on host element');
        this.attrClass = 'hoverClass';
    }

    @HostListener('mouseleave', ['$event'])
    leave() {
        console.log('mouseleave event on host element');
        this.attrClass = '';
    }
}
