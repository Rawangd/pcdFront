import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerChatComponent } from './former-chat.component';

describe('FormerChatComponent', () => {
  let component: FormerChatComponent;
  let fixture: ComponentFixture<FormerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
