import asyncWrapper from "../middleware/asyncMiddleware.js";
import Task from "../models/taskModel.js";
asyncWrapper

const getTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find();
    res.status(200).json(tasks);

});

const createTask = asyncWrapper (async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });
 
});
const getTask = asyncWrapper( async (req, res) => {

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, data: "Item not found" });
    }
    res.status(200).json({ success: true, data: task });

});
const updateTask = asyncWrapper( async (req, res) => {
    

    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
      runValidators: true,
      context: 'query'
    });
    console.log(task);
    if (!task) {
      return res.status(404).json({ success: false, data: "Item not found" });

    }
    res.status(200).json({success: true, data: task})

});
const deleteTask = asyncWrapper(async (req, res) => {

    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, data: "Item not found" });
    }
    res.status(200).json({ success: true, data: task });

});

export { getTask, createTask, getTasks, updateTask, deleteTask };
