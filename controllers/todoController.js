import {
  readDataFile,
  writeDataFile,
  buildTaskObject,
} from "../models/todoModel";

// Each controller should follow this template:
// Validate data
// Read existing data (from JSON or DB)
// Modify data according to the operation
// Save changes
// Return proper success response
// Handle edge cases with errors

export const createTask = (req, res) => {};

export const getAllTasks = (req, res) => {};

export const getTaskById = (req, res) => {};

export const updateTask = (req, res) => {};

export const deleteTask = (req, res) => {};
