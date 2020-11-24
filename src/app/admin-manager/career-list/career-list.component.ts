import { Component, OnInit } from '@angular/core';
import { CareerList } from './model/career-list';
import { Career } from '../career-create/model/career';
import { CareerCreateService } from '../career-create/career-create.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})

export class CareerListComponent implements OnInit {

  careersList : Career[];

  constructor(private careerListService: CareerCreateService) { }

  ngOnInit(): void {
    this.careersList = this.careerListService.getCareers();
  }

}
