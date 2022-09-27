import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentertrainingsComponent } from './centertrainings.component';

describe('CentertrainingsComponent', () => {
  let component: CentertrainingsComponent;
  let fixture: ComponentFixture<CentertrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentertrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentertrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
