import { CareerListResponse } from "./career-list.model";

export interface ResponsePagination{
    total: Number;
    page: Number;
    returnedRecords: Number;
    result: CareerListResponse[];
}