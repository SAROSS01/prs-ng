import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestReviewComponent } from './purchaserequest-review.component';

describe('PurchaserequestReviewComponent', () => {
  let component: PurchaseRequestReviewComponent;
  let fixture: ComponentFixture<PurchaseRequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
