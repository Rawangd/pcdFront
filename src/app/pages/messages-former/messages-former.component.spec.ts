import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFormerComponent } from './messages-former.component';

describe('MessagesFormerComponent', () => {
  let component: MessagesFormerComponent;
  let fixture: ComponentFixture<MessagesFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
