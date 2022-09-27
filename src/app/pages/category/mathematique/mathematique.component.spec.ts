import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematiqueComponent } from './mathematique.component';

describe('MathematiqueComponent', () => {
  let component: MathematiqueComponent;
  let fixture: ComponentFixture<MathematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathematiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
