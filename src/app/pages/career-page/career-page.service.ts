import { Injectable } from '@angular/core';
import {  CareerSaveResponse } from './model/career-response-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerPageService {

  constructor(private readonly http: HttpClient) { }

  getCareerById(id: String): Observable<CareerSaveResponse>{

    return this.http.get<CareerSaveResponse>(`http://localhost:8080/api/v1/careers/${id}`);
  }
}
