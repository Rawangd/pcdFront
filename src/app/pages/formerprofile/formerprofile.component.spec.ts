import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerprofileComponent } from './formerprofile.component';

describe('FormerprofileComponent', () => {
  let component: FormerprofileComponent;
  let fixture: ComponentFixture<FormerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
