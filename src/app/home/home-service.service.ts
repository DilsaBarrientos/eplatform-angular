import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerHome } from './model/career-list.model';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  careers: CareerHome[] = [
    {"id": 1,
    "name": "Carrera de desarrollo y programación",
    "description": "Esta es la descripción de la carrera Desarrollo. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 17,
    "totalCourses": 125
  },
  {"id": 2,
    "name": "Carrera de Diseño y UX",
    "description": "Esta es la descripción de la carrera Diseño y UX. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 6,
    "totalCourses": 80
  },

  {"id": 3,
    "name": "Carrera de Inglés",
    "description": "Esta es la descripción de la carrera de Inglés. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 3,
    "totalCourses": 30
  },

  {"id": 4,
    "name": "Carrera de Finanzas",
    "description": "Esta es la descripción de la carrera de Finanzas. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 15,
    "totalCourses": 230
  },

  {"id": 5,
    "name": "Carrera de Matemáticas, estadística y probabilidad",
    "description": "Esta es la descripción de la carrera de Matemáticas, estadística y probabilidad. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 15,
    "totalCourses": 230
  },

  {"id": 6,
    "name": "Carrera de Marketing y publicidad",
    "description": "Esta es la descripción de la carrera de Marketing y publicidad. En esta carrera encontrarás...",
    "icon": "any",
    "totalRoadmaps": 15,
    "totalCourses": 230
  }

  ]
  constructor() { 

  }

  getCareers(): CareerHome[]{
    
    return this.careers;

  }
}
