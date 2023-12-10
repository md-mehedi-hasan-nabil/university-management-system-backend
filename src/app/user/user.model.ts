import mongoose from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new mongoose.Schema<TUser>({
    userId: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})


const UserModel = mongoose.model("user", userSchema);
export default UserModel;
