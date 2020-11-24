import { Injectable } from '@angular/core';
import { Career } from './model/career';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CareerCreateService {

  private careers: Career[];

  constructor(private readonly http: HttpClient) { }

  addCareer(career: Career){
    this.careers.push(career);
  }

  newCareer(): Career{
    return{
      name:'',
      description:'',
    };
  }

}
