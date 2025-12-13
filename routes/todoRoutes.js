import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/todoController";

const router = express.Router();

router.post("/todo", createTask);

router.get("/todo", getAllTasks);

router.get("/todo/:id", getTaskById);

router.put("/todo/:id", updateTask);

router.delete("/todo/:id", deleteTask);

export default router;

// Endpoint testing pending
