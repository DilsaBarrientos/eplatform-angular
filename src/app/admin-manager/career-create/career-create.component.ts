import { Component, OnInit } from '@angular/core';
import { Career } from './model/career';
import { CareerCreateService } from './career-create.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-career-create',
  templateUrl: './career-create.component.html',
  styleUrls: ['./career-create.component.css']
})
export class CareerCreateComponent implements OnInit {

  career: Career = {
    name: '',
    description: ''
  };

  constructor(private careerCreateService : CareerCreateService, private router: Router) { }

  ngOnInit(): void {
    this.career = this.careerCreateService.newCareer();
  }

  newCareer(): void{
    this.careerCreateService.addCareer(this.career);
    this.career = this.careerCreateService.newCareer();
    }
  }
