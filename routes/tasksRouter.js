import express from "express";
import {
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  createTask,
} from "../controllers/tasksController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
