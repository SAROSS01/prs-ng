import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { User } from '../../../model/user.class';
import { SystemService } from '../../../service/system.service';
import { Router } from '@angular/router';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  title = 'Purchase Request Create';
  user: User;
  pr: PurchaseRequest = new PurchaseRequest();
  jr: JsonResponse;

  constructor(
    private router: Router,
    private sysSvc: SystemService,
    private prSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn){
      this.pr.user = this.sysSvc.data.user.instance;
    } else{
      this.router.navigate['/user/login'];
    }
}

create(){
  this.prSvc.create(this.pr).subscribe(
    jresp =>{
      this.jr = jresp;
      if (this.jr.errors == null){
        this.router.navigate(['/pr/list']);
      } else {
        console.log("error saving pr");
}
  }
  )
}
}