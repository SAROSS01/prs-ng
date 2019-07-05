import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {
  url: string = "http://localhost:8080/purchase-requests/"

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse>{
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  
  create(pr:PurchaseRequest){
    return this.http.post(this.url + "submit-new", pr) as Observable<JsonResponse>;
  }

  edit(pr: PurchaseRequest){
    return this.http.put(this.url, pr) as Observable<JsonResponse>;
  }

  get(prId: string){
    return this.http.get(this.url + prId) as Observable<JsonResponse>;
  }

  delete(pr:PurchaseRequest){
    return this.http.delete(this.url + pr.id) as Observable<JsonResponse>;
  }

  lines(pr:PurchaseRequest){
    return this.http.post(this.url + "lines-for-pr/" + pr.id, pr) as Observable<JsonResponse>;
  }

  reviewList(userId:string){
    return this.http.get(this.url + "list-review/" + userId) as Observable<JsonResponse>;
  }

  approve(approvePr:PurchaseRequest){
    return this.http.put(this.url + "approve", approvePr) as Observable<JsonResponse>;
  }

  reject(rejectPr:PurchaseRequest){
    console.log("reject pr id is " + rejectPr.id)
    return this.http.put(this.url + "reject", rejectPr) as Observable<JsonResponse>;
  }

  submit(submitPr:PurchaseRequest){
    return this.http.put(this.url + 'submit-review', submitPr) as Observable<JsonResponse>;
  }
}