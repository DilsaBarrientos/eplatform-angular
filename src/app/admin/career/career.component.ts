import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from './career-admin.service';
import { Career } from './model/career';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {


  career: Career;
  name: String;
  description: String;


  constructor(private readonly careerAdminService : CareerAdminService) { }

  ngOnInit(): void {

  }

  newCareer(): void{
    this.career = {
      "name": this.name,
      "description": this.description
    }
    this.careerAdminService.addCareer(this.career);
    
  }

}
