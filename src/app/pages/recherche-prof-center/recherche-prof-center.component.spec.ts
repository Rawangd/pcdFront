import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProfCenterComponent } from './recherche-prof-center.component';

describe('RechercheProfCenterComponent', () => {
  let component: RechercheProfCenterComponent;
  let fixture: ComponentFixture<RechercheProfCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheProfCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheProfCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
