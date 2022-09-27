import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCategoryComponent } from './center-category.component';

describe('CenterCategoryComponent', () => {
  let component: CenterCategoryComponent;
  let fixture: ComponentFixture<CenterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
