import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformerComponent } from './loginformer.component';

describe('LoginformerComponent', () => {
  let component: LoginformerComponent;
  let fixture: ComponentFixture<LoginformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
