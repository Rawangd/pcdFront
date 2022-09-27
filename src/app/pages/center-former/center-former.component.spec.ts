import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterFormerComponent } from './center-former.component';

describe('CenterFormerComponent', () => {
  let component: CenterFormerComponent;
  let fixture: ComponentFixture<CenterFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
