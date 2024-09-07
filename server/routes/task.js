const express = require("express");
const router = express.Router();
const {
    createTask,
    fetchAllTasks,
    fetchTaskByID,
    updateTaskByID,
    deleteTask
} = require("../controller/task");

// Define routes
router.post("/tasks", createTask); // Route to create a task
router.get("/tasks", fetchAllTasks); // Route to fetch all tasks
router.get("/tasks/:id", fetchTaskByID); // Route to fetch a task by ID
router.put("/tasks/:id", updateTaskByID); // Route to update a task by ID
router.delete("/tasks/:id", deleteTask); // Route to delete a task by ID

module.exports = router;
