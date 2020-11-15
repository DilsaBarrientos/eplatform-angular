import { Injectable } from '@angular/core';
import { CareerInfo } from './model/career-info-model';
import { RoadmapList } from './model/roadmap-list-model';

@Injectable({
  providedIn: 'root'
})
export class CareerPageService {

  careerFound: CareerInfo = {
    "id": 1,
    "name": "Desarrollo y programación",
    "description": "En esta carrera encontrarás rutas de aprendizaje para llevar tú conocimiento a otro nivel...",
    "totalRoadmaps": 6,
    "updateDate": "2020-11-25",
    "active": true,
    "createDate": "2020-08-12",
    "totalCourses": 27,
    "icon": "any"
  }

  roadmaps: RoadmapList[] = [
    {"id": 1,
    "name": "Desarrollo back-end con .Net Core",
    "description": "Esta es la descripción de la ruta de aprendijaze de Desarrollo back-end con .Net Core. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalCourses": 11
  },
  {"id": 2,
    "name": "Desarollo back-end con Java",
    "description": "Esta es la descripción de la ruta de aprendijaze Desarollo back-end con Java. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-10-25",
    "totalCourses": 22
  },

  {"id": 3,
    "name": "Machine learning",
    "description": "Esta es la descripción de la ruta de aprendijaze de Machine learning. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-20",
    "totalCourses": 12
  },

  {"id": 4,
    "name": "Desarrollo front-end con React",
    "description": "Esta es la descripción de la ruta de aprendijaze de Desarrollo front-end con React. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-10-22",
    "totalCourses": 8
  },

  {"id": 5,
    "name": "Desarrollo movil con iOS",
    "description": "Esta es la descripción de la ruta de aprendijaze de Desarrollo movil con iOS. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-09-12",
    "totalCourses": 12
  },

  {"id": 6,
    "name": "Desarrollo con NodeJs",
    "description": "Esta es la descripción de la ruta de aprendijazede Desarrollo con NodeJs. En esta ruta de aprendijaze encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalCourses": 25
  }

  ]

  constructor() { }


  getRoadmaps(): RoadmapList[]{
    return this.roadmaps;
  }

  getCareerById(id: Number): CareerInfo{
    return this.careerFound;
  }
}
