import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  today = new Date();
  product: Product = {
    id: 1,
    name: 'iPhone X',
    description: 'From Apple',
    price: 80000,
    isAvailable: true
  };
}
