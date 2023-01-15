import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {private baseURL = "http://localhost:8080/api/product";

constructor(private httpClient: HttpClient) { }


getProductList(): Observable<Product[]>{
  return this.httpClient.get<Product[]>(`${this.baseURL}`);
}


getProductById(id: string): Observable<Product>{
  return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
}

createProduct(product: Product): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, product);
}


deleteproduct(id: string): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


}