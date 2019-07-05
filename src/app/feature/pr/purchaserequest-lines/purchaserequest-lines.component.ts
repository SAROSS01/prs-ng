import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.class';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { SystemService } from '../../../service/system.service';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title = 'Line Items';
  pr: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];
  jr: JsonResponse;
  prIdStr: string;
  prliDeleted: string;
  prliDeletedId: string;
  lengthBoo: boolean = false;
  prli: PurchaseRequestLineItem;

  constructor(private prSvc: PurchaseRequestService, private prliSvc: PurchaseRequestLineItemService, private sysSvc: SystemService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.route.params.subscribe(
        params => {
          this.prIdStr = params['id'];
      });
  
      this.prSvc.get(this.prIdStr).subscribe(jresp => {
        this.jr = jresp;
        this.pr = this.jr.data as PurchaseRequest;
        
        this.prSvc.lines(this.pr).subscribe(
          jresp => {
            this.jr = jresp;
            if (this.jr.errors == null) {
              this.prlis = this.jr.data as PurchaseRequestLineItem[];
              if(this.prlis.length > 0){
                this.lengthBoo = true;
              }
            } else {
              console.log('error getting prlis for lines')
            }
        });
      });
    }
  
    // delete(i:number){
    //   let prliId:string = this.prlis[i].id.toString();
    //   this.prliSvc.delete(prliId).subscribe(
    //     jresp => {
    //       this.jr = jresp;
    //       //this.router.navigate(['pr/lines/' + this.prIdStr]);
    //       this.ngOnInit();
    //     });
    // }
  
    submit(){
      this.prSvc.submit(this.pr).subscribe(
        jresp => {
          this.jr = jresp;
          this.router.navigate(['pr/list'])
        }
      )
    }

    delete(id: number){
      let prliIdStr = id.toString()
      this.prliSvc.delete(prliIdStr).subscribe(
        jresp => {
          this.jr = jresp;
          this.ngOnInit();
        }
      )
    }
  
  }