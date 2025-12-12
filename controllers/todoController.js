import {
  readDataFile,
  writeDataFile,
  buildTaskObject,
} from "../models/todoModel";

export const createTask = (req, res) => {
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
};

export const getAllTasks = (_, res) => {
  const tasks = readDataFile();
  res.status(200).json({ data: tasks, count: tasks.length });
};

export const getTaskById = (req, res) => {
  const { id } = req.params;
  const tasks = readDataFile();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }
  res.status(200).json(task);
};

export const updateTask = (req, res) => {
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
};

export const deleteTask = (req, res) => {
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
};

// Testing needed for controller functions
