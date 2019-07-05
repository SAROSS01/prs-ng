import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';

import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserLoginComponent } from './feature/user/login/login.component';

import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';


import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';

import { PurchaseRequestListComponent } from './feature/pr/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestReviewComponent } from './feature/pr/purchaserequest-review/purchaserequest-review.component';
import { PurchaseRequestLinesComponent } from './feature/pr/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchaserequest-approve/purchaserequest-approve.component';

import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';

const routes: Routes = [
  {path:'', redirectTo: '/user/list', pathMatch: 'full' },

  {path:'user/create', component: UserCreateComponent},
  {path:'user/detail/:id', component: UserDetailComponent},
  {path:'user/edit/:id', component: UserEditComponent},
  {path:'user/list', component: UserListComponent},
  {path:'user/login', component: UserLoginComponent},
  {path:'user/remove/:id', component: UserDetailComponent},

  {path:'product/create', component: ProductCreateComponent},
  {path:'product/detail/:id', component: ProductDetailComponent},
  {path:'product/edit/:id', component: ProductEditComponent},
  {path:'product/list', component: ProductListComponent},
  
  {path: 'vendor/create', component: VendorCreateComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},  
  {path: 'vendor/list', component: VendorListComponent},

  { path: 'purchaserequest/list', component: PurchaseRequestListComponent },
  { path: 'purchaserequest/detail/:id', component: PurchaseRequestDetailComponent },
  { path: 'purchaserequest/create', component: PurchaseRequestCreateComponent },
  { path: 'purchaserequest/review', component: PurchaseRequestReviewComponent },
  { path: 'purchaserequest/approve/:id', component: PurchaseRequestApproveComponent },
  { path: 'purchaserequest/lines/:id', component: PurchaseRequestLinesComponent },
  { path: 'purchaserequest/lines/remove/:purchaserequest/:prli', component: PurchaseRequestLinesComponent },
  { path: 'purchaserequest/edit/:id', component: PurchaseRequestEditComponent },
  { path: 'purchaserequestlineitem/create/:id', component: PurchaseRequestLineItemCreateComponent },
  { path: 'purchaserequestlineitem/edit/:id', component: PurchaseRequestLineItemEditComponent },
  { path: 'purchaserequestlineitem/create', component: PurchaseRequestLineItemCreateComponent },
  
  

  {path:'about', component: AboutComponent},
  
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }