import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformertableComponent } from './allformertable.component';

describe('AllformertableComponent', () => {
  let component: AllformertableComponent;
  let fixture: ComponentFixture<AllformertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllformertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllformertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
