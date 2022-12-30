import Task from "../models/taskModel.js";

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
        
    } catch (error) {
        res.status(500).json(error.message || error.name)
        
    }
    
    
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message|| error.name)
        
    }

    
}
const getTask = (req, res) => {
    res.send('get one task')
    
}
const updateTask = (req, res) => {
    res.send('update task')
    
}
const deleteTask = (req, res) => {
    res.send('delete task')
    
}


export {getTask, createTask, getTasks, updateTask, deleteTask}