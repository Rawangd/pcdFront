import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincenterComponent } from './logincenter.component';

describe('LogincenterComponent', () => {
  let component: LogincenterComponent;
  let fixture: ComponentFixture<LogincenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
