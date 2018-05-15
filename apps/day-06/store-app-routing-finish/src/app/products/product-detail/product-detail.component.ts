import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log('product id:', this.id);
      this.product = this.productsService.getProduct(this.id);
    });
  }

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
  }
}
