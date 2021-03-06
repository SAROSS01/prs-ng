import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@model/menu-item.class';
import { SystemService } from '@svc/system.service';
import { JsonResponse } from '@model/json-response.class';
import { UserService } from '@svc/user.service';
import { User } from '@model/user.class';
import { PurchaseRequestService } from '@svc/purchase-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] =  [
    new MenuItem("Home","/home","This is the home menu item"),
    new MenuItem("User","/user/list","This is the user menu item"),
    new MenuItem("Vendor","/vendor/list","This is the vendor menu item"),
    new MenuItem("Product","/product/list","This is the product menu item"),
    new MenuItem("Request","/purchaserequest/list","This is the pr menu item"),
    new MenuItem("Review","/purchaserequest/review","This is the pr review menu item"),
    new MenuItem("Login","/user/login","This is the login menu item"),
    new MenuItem("About","/about","This is the about menu item")
  ]

  jr:JsonResponse;
  user:User;
  revCheck:boolean = false;


  constructor(
    private sysSvc:SystemService,
    private userSvc: UserService, 
    private prSvc: PurchaseRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn){
      this.user = this.sysSvc.data.user.instance;
    } else{
      this.router.navigate['/user/login'];
    }
  }

}