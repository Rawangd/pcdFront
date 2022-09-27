import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningFormerComponent } from './planning-former.component';

describe('PlanningFormerComponent', () => {
  let component: PlanningFormerComponent;
  let fixture: ComponentFixture<PlanningFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
