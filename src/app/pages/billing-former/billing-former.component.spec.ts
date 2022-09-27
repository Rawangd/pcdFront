import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFormerComponent } from './billing-former.component';

describe('BillingFormerComponent', () => {
  let component: BillingFormerComponent;
  let fixture: ComponentFixture<BillingFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
