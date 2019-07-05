import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  user:User;
  prs:PurchaseRequest[];
  jr: JsonResponse;
  revCheck: boolean;
  reason:string;
  status:boolean = true;
  openPr: PurchaseRequest
  prlis:PurchaseRequestLineItem[];
  rejectId:number;
  linesCheck:boolean = true;
  pr:PurchaseRequest;
  

  constructor(private prSvc: PurchaseRequestService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn){
      this.user = this.sysSvc.data.user.instance;
      if (this.user.reviewer == false){
        this.revCheck = false;
      } else{
        this.revCheck = true;
        this.prSvc.reviewList(this.user.id.toString()).subscribe(
          jresp =>{
            this.jr = jresp;
              this.prs = this.jr.data as PurchaseRequest[];
          });
      }
    } else{
      this.router.navigate['/user/login'];
    }
  }
  notlogged(){
    this.router.navigate['/user/login'];
  }

  approve(i:number){
    let approvePr:PurchaseRequest = this.prs[i];
    this.prSvc.approve(approvePr).subscribe(
      jresp =>{
          this.jr = jresp;
          this.ngOnInit();
      });
  }


  // reasonReject(i:number){
  //   this.rejectId = i;
  //   let rejectPr:PurchaseRequest = this.prs[i];
  //   this.rejectPr = rejectPr;
  //   this.prSvc.lines(rejectPr).subscribe(
  //     jresp => {
  //       this.jr = jresp;
  //       if (this.jr.errors == null) {
  //         this.prlis = this.jr.data as PurchaseRequestLineItem[];
  //         console.log("prlis are " + this.prlis)
  //       } else {
  //         console.log('error getting prlis for lines')
  //       }
  //   });
  //   this.status = !this.status;
  // }
  reject2(){
    console.log("id: " + this.openPr.reasonForRejection)
    this.openPr.reasonForRejection = this.reason;
    console.log("id: " + this.openPr.reasonForRejection)
    this.prSvc.reject(this.openPr).subscribe(
      jresp =>{
        this.jr = jresp;
        this.ngOnInit();
      }
    )
    console.log("id: " + this.openPr.reasonForRejection)
  }

  reject(i:number){
    let rejectPr:PurchaseRequest = this.prs[i];
    rejectPr.reasonForRejection = this.reason;
    this.prSvc.reject(rejectPr).subscribe(
      jresp =>{
          this.jr = jresp;
          this.ngOnInit();
      
      });
  }

  lines(x:number){
   this.linesCheck = false;
   this.populateOpenPr(x);
  }

  cancel(){
    this.status = !this.status;
  }

  populateOpenPr(x: number){
     this.prSvc.get(x.toString()).subscribe(
      jresp => {
        this.jr = jresp;
        this.openPr = this.jr.data as PurchaseRequest
        console.log("id:" + this.openPr.id)
        this.prSvc.lines(this.openPr).subscribe(
          jresp => {
            this.jr = jresp;
            if (this.jr.errors == null) {
              this.prlis = this.jr.data as PurchaseRequestLineItem[];
            } else {
              console.log('error getting prlis for lines')
            }
      });

  })
     
 
} 
}