import mongoose from 'mongoose';
import { TPreRequisiteCourse, Tcourse } from './course.interface';

const preRequisiteCourseSchema = new mongoose.Schema<TPreRequisiteCourse>({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    },
    isDeleted: Boolean
})

const courseSchema = new mongoose.Schema<Tcourse>({
    title: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Course title is required."]
    },
    prefix: {
        type: String,
        trim: true,
        required: [true, "Course title is required."]
    },
    code: {
        type: Number,
        trim: true,
        required: [true, "Course title is required."]
    },
    credits: {
        type: Number,
        trim: true,
        required: [true, "Course title is required."]
    },
    isDeleted: {
        type: Boolean,
        required: [true, "Course title is required."]
    },
    preRequisiteCourses: {
        type: [preRequisiteCourseSchema],
        default: []
    }

}, { timestamps: true })

const CourseModel = mongoose.model("course", courseSchema);
export default CourseModel;