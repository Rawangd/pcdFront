import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladmintableComponent } from './alladmintable.component';

describe('AlladmintableComponent', () => {
  let component: AlladmintableComponent;
  let fixture: ComponentFixture<AlladmintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlladmintableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlladmintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
