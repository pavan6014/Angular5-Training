import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage = false;
  @Output() productCreated = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  onSave() {
    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    // Option 1
    // const self = this;
    // setTimeout(
    //   function() {
    //     console.log('this pointer:', self);
    //     self.showMessage = false;
    //     console.log('setTimeout callback function called.');
    //   }, 5000
    // );

    // Option 2
    // setTimeout(
    //   function() {
    //     console.log('this pointer:', this);
    //     this.showMessage = false;
    //     console.log('setTimeout callback function called.');
    //   }.bind(this), 5000
    // );

    // Option 3
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
