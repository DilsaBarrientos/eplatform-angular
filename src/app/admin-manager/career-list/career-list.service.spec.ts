import { TestBed } from '@angular/core/testing';

import { CareerListService } from './career-list.service';

describe('CareerListService', () => {
  let service: CareerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
