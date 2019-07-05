import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { Product } from '../../../model/product.class';
import { PurchaseRequest } from '@model/purchase-request';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';
import { ProductService } from '../../../service/product.service';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title: string = "prli-create"
  jr:JsonResponse;
  prli:PurchaseRequestLineItem = new PurchaseRequestLineItem(0,null,null,0);
  
  prIdStr:string;
  products: Product[];
  pr:PurchaseRequest;


  constructor(
    private prliSvc: PurchaseRequestLineItemService,
    private prSvc: PurchaseRequestService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        this.prIdStr = params['id'];
        this.prSvc.get(this.prIdStr).subscribe( 
          jresp =>{
            this.jr = jresp;
            this.pr = this.jr.data as PurchaseRequest;
            this.prli.purchaseRequest = this.pr;
          }
        )
      });
    this.productSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.products = this.jr.data as Product[];
      });

  }

  create(){
    this.prliSvc.create(this.prli).subscribe(
      jresp =>{
        this.jr = jresp;
        this.router.navigate(['pr/lines/' + this.prli.purchaseRequest.id])
        console.log("hehe");

      });
  }

}