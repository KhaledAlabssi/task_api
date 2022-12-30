import express from 'express';
import tasksRouter from './routes/tasksRouter.js'
import morgan from 'morgan';


const app = express();
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("home page...")
})
app.use('/api/v1/tasks', tasksRouter)

app.listen(5000, () => console.log("server running on 5000"))