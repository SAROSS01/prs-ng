import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestService } from '@svc/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  title:string = "purchase request list";
  jr:JsonResponse;
  prs:PurchaseRequest[];
  prId: string;

  constructor(
    private prSvc:PurchaseRequestService, 
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    console.log("")
    this.prSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if (this.jr.errors == null){
          this.prs = this.jr.data as PurchaseRequest[];
        } else{
          console.log("error getting pr list")
        }
      }
    )
  }

}