import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiquesComponent } from './physiques.component';

describe('PhysiquesComponent', () => {
  let component: PhysiquesComponent;
  let fixture: ComponentFixture<PhysiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
