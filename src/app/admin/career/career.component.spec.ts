import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent } from './career.component';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerComponent ],
      imports:[

      ],
      providers:[
      ],
    }).compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fdescribe('When createCareer() is called', () => {

    fit('all should be fine', () => {
      
    })
  })

 

});
