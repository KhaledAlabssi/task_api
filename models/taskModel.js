import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide task body."],
        maxlength: [30, "Task can't be longer than 30 characters"],
        trim: true
    },
    completed: {
        type: Boolean,
        default : false,
    }

}, {timestamps: true})
const Task = mongoose.model('Task', TaskSchema)
export default Task;