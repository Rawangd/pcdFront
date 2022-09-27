import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterformerComponent } from './registerformer.component';

describe('RegisterformerComponent', () => {
  let component: RegisterformerComponent;
  let fixture: ComponentFixture<RegisterformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
