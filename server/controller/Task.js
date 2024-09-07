const Task = require("../models/Task");

// Creation of a task
exports.createTask = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;

        if (!title || !description || !deadline) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Create a new task
        const newTask = new Task({
            title,
            description,
            deadline,
            created_At: Date.now(),
        });

        await newTask.save();

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            newTask,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Task creation failed",
        });
    }
};

// Fetch all tasks
exports.fetchAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});

        if (tasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found",
            });
        }

        res.status(200).json({
            success: true,
            message: "All tasks fetched",
            tasks,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch tasks",
        });
    }
};

// Fetch a task by its ID
exports.fetchTaskByID = async (req, res) => {
    try {
        const taskID = req.params.id;

        if (!taskID) {
            return res.status(400).json({
                success: false,
                message: "Task ID not found",
            });
        }

        const task = await Task.findById(taskID);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            task,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch task",
        });
    }
};

// Update a task by its ID
exports.updateTaskByID = async (req, res) => {
    try {
        const taskID = req.params.id;
        const { title, description, deadline } = req.body;

        if (!taskID) {
            return res.status(400).json({
                success: false,
                message: "Task ID not found",
            });
        }

        const updateFields = {};
        if (title) updateFields.title = title;
        if (description) updateFields.description = description;
        if (deadline) updateFields.deadline = deadline;

        const updatedTask = await Task.findByIdAndUpdate(taskID, updateFields, { new: true });

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            updatedTask,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update task",
        });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const taskID = req.params.id;

        if (!taskID) {
            return res.status(400).json({
                success: false,
                message: "Task ID not found",
            });
        }

        const deletedTask = await Task.findByIdAndDelete(taskID);

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete task",
        });
    }
};
