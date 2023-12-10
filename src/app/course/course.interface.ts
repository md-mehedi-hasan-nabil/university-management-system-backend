import { Types } from "mongoose";

export type TPreRequisiteCourse = {
    course?: Types.ObjectId;
    isDeleted?: boolean;
}

export type Tcourse = {
    title: string;
    prefix: string;
    code: number;
    credits: number;
    isDeleted: boolean;
    preRequisiteCourses: [TPreRequisiteCourse]
}