import { getTestBed, TestBed } from '@angular/core/testing';

import { CareerAdminService } from './career-admin.service';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';

fdescribe('CareerAdminService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });
  
  fit ('should return an Observable<Career>', () => {
    const service: CareerAdminService = TestBed.get(CareerAdminService);
    const dummyCareers = [{name: 'Desarrollo', description: 'Esta carrera...'}, {name: 'Disenio', description: 'Esta carrera..'}];

    CareerAdminService.create().subscribe(careers =>{
      expect(careers).toEqual(dummyCareers);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/careers');
    expect(req.request.method).toBe('POST');
    req.flush(dummyCareers);
  });

});
