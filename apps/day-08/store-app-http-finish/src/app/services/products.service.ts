import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    // How to pass custom headers and search parameters (query parameters)?
    // Uncomment following code and check the Network tab within
    // Chrome Developer Console

    // const myHeaders = new HttpHeaders({
    //   auth: 'abc123',
    //   myHeader2: 'xyz'
    // });
    // const myParams = new HttpParams({
    //   fromObject: { name: 'hari' }
    // });
    // const httpOptions = {
    //   headers: myHeaders
    //   // params: myParams
    // };
    // return this.httpClient.get<Product[]>(this.apiUrl, httpOptions);

    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
