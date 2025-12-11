import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "../data/todo.json");

export function readDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

export function writeDataFile(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

function generateId() {
  return uuidv4();
}

export function buildTaskObject(title, description = "") {
  return {
    id: generateId(),
    title,
    description,
    isCompleted: false,
    createdAt: new Date().toISOString()
  };
}
