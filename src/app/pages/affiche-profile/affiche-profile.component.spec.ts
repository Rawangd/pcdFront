import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheProfileComponent } from './affiche-profile.component';

describe('AfficheProfileComponent', () => {
  let component: AfficheProfileComponent;
  let fixture: ComponentFixture<AfficheProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
