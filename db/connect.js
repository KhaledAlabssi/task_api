import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URL;

const connectDB = () => {

    mongoose.connect(url);
};


export default connectDB;
