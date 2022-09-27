import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercenterComponent } from './registercenter.component';

describe('RegistercenterComponent', () => {
  let component: RegistercenterComponent;
  let fixture: ComponentFixture<RegistercenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
