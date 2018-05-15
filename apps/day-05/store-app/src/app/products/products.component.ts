import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  field = 'name';
  searchText = '';
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    productsService.productCreated.subscribe((product: Product) => {
      console.log('product created event handled:', product);
    });
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
