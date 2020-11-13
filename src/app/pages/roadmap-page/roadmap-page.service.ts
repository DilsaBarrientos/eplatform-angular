import { Injectable } from '@angular/core';
import { CourseList } from './model/course-list-mode';
import { RoadmapInfo } from './model/roadmap-info-model';
import { RoadmapPageComponent } from './roadmap-page.component';

@Injectable({
  providedIn: 'root'
})
export class RoadmapPageService {

  roadmapFound: RoadmapInfo = {
    "id": 1,
    "name": "Desarrollo back-end con Java",
    "description": "En esta ruta de aprendizaje encontrarás los cursos para llevar tú conocimiento a otro nivel...",
    "updateDate": "2020-11-25",
    "totalCourses": 11,
    "icon": "any"
  }

  courses: CourseList[] = [
    {"id": 1,
    "name": "Curso básico de Git",
    "description": "Esta es la descripción del curso básico de Git. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 11,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Básico"
  },
  {"id": 2,
    "name": "Curso básico de Java",
    "description": "Esta es la descripción del curso básico de Java. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 14,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Básico"
  },

  {"id": 3,
    "name": "Curso intermedio de Java",
    "description": "Esta es la descripción del curso intermedio de Java. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 9,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Básico"
  },

  {"id": 4,
    "name": "Curso de bases de datos con MySQL",
    "description": "Esta es la descripción del curso de bases de datos con MySQL. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 16,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Intermedio"
  },

  {"id": 5,
    "name": "Curso de fundamentos de Spring boot",
    "description": "Esta es la descripción del curso básico de Spring boot. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 16,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Básico"
  },

  {"id": 1,
    "name": "Curso avanzado de Spring boot",
    "description": "Esta es la descripción del curso avanzado de Spring boot. En este curso encontrarás...",
    "icon": "any",
    "updateDate": "2020-11-25",
    "totalClasses": 11,
    "createDate": "2020-11-25",
    "active": true,
    "level": "Avanzado"
  }

  ]

  constructor() { }

  getCourses(): CourseList[] {

    return this.courses;
  }

  getRoadmapById(id: Number): RoadmapInfo{
    return this.roadmapFound;
  }
}
