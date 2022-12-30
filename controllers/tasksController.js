const getTasks = (req, res) => {
    console.log(req);
    res.send('all tasks')
    
}
const createTask = (req, res) => {
    res.send('create task')
    
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