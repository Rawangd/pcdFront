import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningStudentComponent } from './planning-student.component';

describe('PlanningStudentComponent', () => {
  let component: PlanningStudentComponent;
  let fixture: ComponentFixture<PlanningStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
