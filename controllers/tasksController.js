import Task from "../models/taskModel.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error.message || error.name);
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message || error.name);
  }
};
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, data: "Item not found" });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, data: error.name || error.message });
  }
};
const updateTask = async (req, res) => {
    
  try {
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
  } catch (error) {
    res.status(500).json({ success: false, data: error.name || error.message });

  }
};
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, data: "Item not found" });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, data: error.name || error.message });
  }
};

export { getTask, createTask, getTasks, updateTask, deleteTask };
