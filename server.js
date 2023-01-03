import express, { application } from 'express';
import tasksRouter from './routes/tasksRouter.js'
import morgan from 'morgan';
import connectDB from './db/connect.js';
import notFound from './middleware/notfoundMiddleware.js';
import errorHandler from './middleware/errorHandler.js';
// import dotenv from "dotenv";
// dotenv.config();
// const url = process.env.MONGO_URL;



const app = express();
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("home page...")
})
app.use('/api/v1/tasks', tasksRouter)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try {
        await connectDB();
        app.listen(5000, () => console.log("server running on 5000"))
        
    } catch (error) {
        console.log(error);
        
    }

}
start();
