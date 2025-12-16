import {
  readDataFile,
  writeDataFile,
  buildTaskObject,
} from "../models/todoModel.js";

export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      const error = new Error("Title is required");
      error.statusCode = 400;
      throw error;
    }
    const tasks = readDataFile();
    const newTask = buildTaskObject(title, description || "");
    tasks.push(newTask);
    writeDataFile(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (_, res, next) => {
  try {
    const tasks = readDataFile();
    res.status(200).json({ data: tasks, count: tasks.length });
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = readDataFile();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    const tasks = readDataFile();
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      const error = new Error("Task does not exist");
      error.statusCode = 404;
      throw error;
    }
    const task = tasks[taskIndex];
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (isCompleted !== undefined) task.isCompleted = isCompleted;
    tasks[taskIndex] = task;
    writeDataFile(tasks);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = readDataFile();
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      const error = new Error("Task does not exist");
      error.statusCode = 404;
      throw error;
    }
    tasks.splice(taskIndex, 1);
    writeDataFile(tasks);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
