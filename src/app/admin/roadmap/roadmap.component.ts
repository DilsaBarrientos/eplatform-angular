import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CareerPageService } from 'src/app/pages/career-page/career-page.service';
import { CareerSaveResponse } from 'src/app/pages/career-page/model/career-response-model';
import { RoadmapSaveRequest } from './model/roadmap-save-request';
import { RoadmapAdminService } from './roadmap-admin.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  careerId: String

  careerInfo: CareerSaveResponse;

  createRoadmapForm: FormGroup;

  page: Number;

  constructor(private readonly route: ActivatedRoute, private readonly careerPageService: CareerPageService, private _builder: FormBuilder,
    private readonly roadmapAdminService: RoadmapAdminService) { 
    this.createRoadmapForm = this._builder.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
        description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(700)])],
        detail: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
      }
    )

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.careerId = params.get('id');
      this.getCareerInfo();
    })
  }

  createRoadmap(value){
    const roadmapToCreate: RoadmapSaveRequest = {
      name: value.name,
      description: value.description,
      detail: value.detail
    }

    this.roadmapAdminService.create(roadmapToCreate);
  }

  getCareerInfo(){
    this.careerPageService.getCareerById(this.careerId).subscribe(res => this.careerInfo = res);
  }

}


