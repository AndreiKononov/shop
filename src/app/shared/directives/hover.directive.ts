import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHoverEffect]',
})
export class HoverDirective {
    @HostBinding('class')
    attrClass: string;

    constructor() {}

    @HostListener('mouseenter', ['$event'])
    enter() {
        this.attrClass = 'beigeColor';
    }

    @HostListener('mouseleave', ['$event'])
    leave() {
        this.attrClass = '';
    }
}
