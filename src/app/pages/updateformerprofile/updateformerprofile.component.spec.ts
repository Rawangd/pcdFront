import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformerprofileComponent } from './updateformerprofile.component';

describe('UpdateformerprofileComponent', () => {
  let component: UpdateformerprofileComponent;
  let fixture: ComponentFixture<UpdateformerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateformerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateformerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
