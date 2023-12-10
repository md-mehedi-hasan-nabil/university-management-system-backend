import { Tcourse } from "./course.interface";
import CourseModel from "./course.model";

const getAllCoursesFromDB = async () => {
    return CourseModel.find()
}

const getSingleCourseFromDB = async (courseId: string) => {
    return CourseModel.findById(courseId)
}

const createCourse = async (course: Tcourse) => {
    return CourseModel.create(course)
}

const updateCourse = async () => {
    return {}
}

const deleteCourseIntoDB = async (courseId: string) => {
    return CourseModel.findByIdAndUpdate(courseId, { isDeleted: true }, { new: true })
}

export const courseService = {
    getSingleCourseFromDB,
    getAllCoursesFromDB,
    createCourse,
    updateCourse,
    deleteCourseIntoDB
}