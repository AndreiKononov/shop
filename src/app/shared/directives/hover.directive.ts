import { Input, Directive, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appHoverEffect]',
})
export class HoverDirective implements AfterViewInit {

    @Input('appHoverEffect') backgroundColor: string;

    private initialColor: string;

    constructor(private element: ElementRef<HTMLElement>) {}

    @HostBinding('style.backgroundColor') elementBackground: string;

    ngAfterViewInit(): void {
        this.initialColor = this.element.nativeElement.style.backgroundColor;
    }

    @HostListener('mouseover')
    onMouseOver() {
        this.elementBackground = this.backgroundColor;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.elementBackground = this.initialColor;
    }
}
