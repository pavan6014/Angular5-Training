import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage = false;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {}

  onSave() {
    this.productsService.addProduct(this.product);
    this.product = new Product();
    this.showMessage = true;

    // Option 3
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);

    this.loggerService.log('New product created successfully.');
  }
}
