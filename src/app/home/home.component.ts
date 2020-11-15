import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { CareerHome } from './model/career-list.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    careersList: CareerHome[];

    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private readonly homeService: HomeServiceService) { }

    ngOnInit() {
        this.careersList = this.homeService.getCareers();
    }
}
