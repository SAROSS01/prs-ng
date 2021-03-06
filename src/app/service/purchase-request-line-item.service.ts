import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { Observable } from 'rxjs';
import { JsonResponse } from '@model/json-response.class';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestLineItemService {
  url: string = "http://localhost:8080/purchase-request-line-items/";

  constructor(private http: HttpClient) { }

  get(prliId:string){
    return this.http.get(this.url + prliId) as Observable<JsonResponse>;
  }

  edit(prli: PurchaseRequestLineItem){
    return this.http.put(this.url, prli) as Observable<JsonResponse>;
  }

  create(prli: PurchaseRequestLineItem){
    return this.http.post(this.url, prli) as Observable<JsonResponse>;
  }

  delete(prliIdStr: string){
    return this.http.delete(this.url + prliIdStr) as Observable<JsonResponse>;
  }
}