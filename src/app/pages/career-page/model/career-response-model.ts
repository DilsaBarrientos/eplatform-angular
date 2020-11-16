import { RoadmapListResponse } from "./roadmap-list-model";

export interface CareerSaveResponse{
    id: Number,
    name: String,
    description: String,
    icon?: String,
    totalRoadmaps?: Number,
    totalCourses?: Number,
    createDate: String,
    updateDate: String,
    active: Boolean,
    roadmaps?: RoadmapListResponse[]
}