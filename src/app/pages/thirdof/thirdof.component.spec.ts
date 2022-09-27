import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdofComponent } from './thirdof.component';

describe('ThirdofComponent', () => {
  let component: ThirdofComponent;
  let fixture: ComponentFixture<ThirdofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
