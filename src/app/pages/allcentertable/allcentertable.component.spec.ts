import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcentertableComponent } from './allcentertable.component';

describe('AllcentertableComponent', () => {
  let component: AllcentertableComponent;
  let fixture: ComponentFixture<AllcentertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcentertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcentertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
