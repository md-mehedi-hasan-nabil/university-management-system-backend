import { createJsonResponse } from "../utils/createJsonResponse";
import { handleAsyncRequest } from "../utils/handleAsyncRequest";
import { courseService } from "./course.service";

const getAllCourses = handleAsyncRequest(async (req, res) => {
    const courses = await courseService.getAllCoursesFromDB();

    res.status(200).json(courses)
})

const getCourse = handleAsyncRequest(async (req, res) => {
    const courseId = req.params.courseId;

    const course = await courseService.getSingleCourseFromDB(courseId);

    res.status(200).json(course)
})

const addCourse = handleAsyncRequest(async (req, res) => {
    const result = await courseService.createCourse(req.body);
    
    res.status(201).json(createJsonResponse.success("Course add successful.", result))
})



export const courseController = {
    getAllCourses,
    getCourse,
    addCourse
}