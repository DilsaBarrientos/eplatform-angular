import { Injectable } from '@angular/core';
import { Career } from './model/career';

@Injectable({
  providedIn: 'root'
})
export class CareerAdminService {

  careers: Career[] = [];
  

  constructor(){
    
  }
    addCareer(career: Career): void {
      console.log(career);
      this.careers.push(career);
    }

  }


