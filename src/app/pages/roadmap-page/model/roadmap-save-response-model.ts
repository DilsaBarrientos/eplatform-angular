import { CourseList } from "./course-list-model";

export interface RoadmapSaveResponse{
    id: Number,
    name: String,
    description: String,
    detail?: String,
    iconId?: String,
    bannerId?: String,
    active?: Boolean,
    totalCourses?: Number,
    createDate: String,
    courseIds: Array<CourseList>,
    updateDate?: String
}