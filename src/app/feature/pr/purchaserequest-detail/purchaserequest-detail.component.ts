import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title = 'Purchase Request Detail';
  pr: PurchaseRequest;
  jr: JsonResponse;
  prIdStr: string;

  constructor(private prSvc:PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.prIdStr = params['id']);
  
    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.pr = this.jr.data as PurchaseRequest;
      });
  }

  delete(){
    this.prSvc.delete(this.pr).subscribe(
      jresp=>{
        this.jr = jresp;
        this.router.navigate(['pr/list'])
      }
    )

  }

}