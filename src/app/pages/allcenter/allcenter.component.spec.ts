import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcenterComponent } from './allcenter.component';

describe('AllcenterComponent', () => {
  let component: AllcenterComponent;
  let fixture: ComponentFixture<AllcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
