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

  career: Career[];

  constructor(private careerCreateService : CareerCreateService, private router: Router) { }

  ngOnInit(): {
    this.career = 
  }
  


}
