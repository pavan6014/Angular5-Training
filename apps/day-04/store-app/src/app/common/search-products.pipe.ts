import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {
  transform(products: Product[], searchText: string, field: string): Product[] {
    if (searchText.length <= 0) {
      return products;
    }

    const filteredProducts = products.filter(product => {
      return (
        product[field].toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      );
    });

    return filteredProducts;
  }
}
