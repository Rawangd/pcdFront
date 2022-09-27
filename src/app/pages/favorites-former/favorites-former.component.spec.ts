import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesFormerComponent } from './favorites-former.component';

describe('FavoritesFormerComponent', () => {
  let component: FavoritesFormerComponent;
  let fixture: ComponentFixture<FavoritesFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
