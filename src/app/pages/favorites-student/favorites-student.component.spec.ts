import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesStudentComponent } from './favorites-student.component';

describe('FavoritesStudentComponent', () => {
  let component: FavoritesStudentComponent;
  let fixture: ComponentFixture<FavoritesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
