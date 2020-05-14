import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onBuy() {
    console.log(`This product was purchased` );
  }

}
// Желательно для каждого компонента создавать папку.
// Когда будет 5-7 компонентов, будет очень много файлов в папке components.
