import { TestBed } from '@angular/core/testing';

import { CentercoursesService } from './centercourses.service';

describe('CentercoursesService', () => {
  let service: CentercoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentercoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
