import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareerListResponse } from 'src/app/home/model/career-list.model';
import { CareerAdminService } from './career-admin.service';
import { CareerSaveRequest } from './model/career-save-request';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  careersList: CareerListResponse[];

  createCareerForm: FormGroup;

  page: Number;

  constructor(private _builder: FormBuilder, private readonly careerAdminService: CareerAdminService) {

    this.createCareerForm = this._builder.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
        description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])]
      }
    )

   }

  ngOnInit(): void {
    this.careerAdminService.findByParameters()
            .subscribe(responsePagination => {
                this.careersList = responsePagination.result;
                this.page = responsePagination.page;
                console.log(responsePagination);
            })
  }

  createCareer(value){
    const careerToCreate: CareerSaveRequest = {
      name: value.name,
      description: value.description
    }

    this.careerAdminService.create(careerToCreate);
    this.createCareerForm.reset();
  }

  

}
