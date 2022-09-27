import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerCoursesComponent } from './former-courses.component';

describe('FormerCoursesComponent', () => {
  let component: FormerCoursesComponent;
  let fixture: ComponentFixture<FormerCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
