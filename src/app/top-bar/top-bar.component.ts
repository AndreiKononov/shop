import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product/services/products.service';
import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
