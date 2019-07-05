import { Injectable } from '@angular/core';
import { Product } from '@model/product.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';

const url: string = 'http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
  create(product: Product): Observable<JsonResponse> {
      return this.http.post(url, product) as Observable<JsonResponse>;
  } 

  get(id: string): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(product: Product): Observable<JsonResponse> {
		return this.http.put(url, product) as Observable<JsonResponse>;
  }

  remove(product: Product): Observable<JsonResponse> {
    return this.http.delete(url + product.id) as Observable<JsonResponse>;
  }

constructor(private http: HttpClient) { }
}