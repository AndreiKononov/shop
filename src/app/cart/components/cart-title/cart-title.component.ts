import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-title',
  templateUrl: './cart-title.component.html',
  styleUrls: ['./cart-title.component.scss']
})
export class CartTitleComponent implements AfterViewInit {

    @ViewChild('appTitle') titleTag: ElementRef<HTMLInputElement>;

    ngAfterViewInit() {
        this.titleTag.nativeElement.innerText = 'My shop';
    }
}
