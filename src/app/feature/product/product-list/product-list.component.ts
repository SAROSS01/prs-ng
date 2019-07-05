import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.class';
import { ProductService } from '../../../service/product.service';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  title: string = "Product List";
  jr : JsonResponse;

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if(this.jr.errors == null){
        this.products = this.jr.data as Product[];
        console.log(this.products);
        } else{ console.log("error")

        }


      }
    )
  }

}
