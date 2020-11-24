import { TestBed } from '@angular/core/testing';

import { CareerCreateService } from './career-create.service';

describe('CareerCreateService', () => {
  let service: CareerCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
