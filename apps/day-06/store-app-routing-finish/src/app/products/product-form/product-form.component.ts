import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('getting params:', params.get('id'));
      if (!params.get('id')) {
        return;
      }

      this.id = +params.get('id');
      console.log('product id:', this.id);
      this.product = this.productsService.getProduct(this.id);
    });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');

    if (this.id) {
      this.productsService.updateProduct(this.id, this.product);
      console.log('Product updated successfully.');
    } else {
      this.productsService.addProduct(this.product);
      console.log('Product added successfully.');
    }

    this.router.navigate(['/products']);
  }
}
