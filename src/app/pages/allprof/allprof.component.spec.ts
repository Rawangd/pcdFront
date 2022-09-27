import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprofComponent } from './allprof.component';

describe('AllprofComponent', () => {
  let component: AllprofComponent;
  let fixture: ComponentFixture<AllprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
