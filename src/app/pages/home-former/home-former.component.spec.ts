import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormerComponent } from './home-former.component';

describe('HomeFormerComponent', () => {
  let component: HomeFormerComponent;
  let fixture: ComponentFixture<HomeFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
