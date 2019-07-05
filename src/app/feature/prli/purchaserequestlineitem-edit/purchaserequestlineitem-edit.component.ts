import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItem } from '@model/purchase-request-lineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchase-request-line-item.service';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  title = 'Line Item Edit';
  prli: PurchaseRequestLineItem;

  constructor(private route: ActivatedRoute, private router: Router, private prliSvc: PurchaseRequestLineItemService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prliSvc.get(params.id).subscribe(jr => {
        this.prli = jr.data as PurchaseRequestLineItem;
      });
    });
  }

  edit() {
    this.prliSvc.edit(this.prli).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.router.navigateByUrl('/purchase-request/lines/' + this.prli.purchaseRequest.id);
    });
  }

  remove() {
    this.prliSvc.delete(this.prli.id).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.router.navigateByUrl('/purchase-request/lines/' + this.prli.purchaseRequest.id);
    });
  }
}