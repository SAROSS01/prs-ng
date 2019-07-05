import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { SortPipe } from './pipe/sort.pipe';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { PurchaseRequestListComponent } from './feature/pr/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestService } from './service/purchase-request.service';
import { PurchaseRequestLineItemService } from './service/purchase-request-line-item.service';
import { UserLoginComponent } from './feature/user/login/login.component';
import { SystemService } from './service/system.service';
import { PurchaseRequestReviewComponent } from './feature/pr/purchaserequest-review/purchaserequest-review.component';
import { PurchaseRequestLinesComponent } from './feature/pr/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchaserequest-approve/purchaserequest-approve.component';
import { AboutComponent } from './core/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    SortPipe,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    UserLoginComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestApproveComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }