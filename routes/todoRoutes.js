import express from "express";

const router = express.Router();

// POST /api/todo
router.post("/todo", (req, res) => {});

// GET /api/todo
router.get("/todo", (req, res) => {});

// GET /api/todo/:id
router.get("/todo/:id", (req, res) => {});

// PUT /api/todo/:id
router.put("/todo/:id", (req, res) => {});

// DELETE /api/todo/:id
router.delete("/todo/:id", (req, res) => {});

export default router;
