import Task from "../models/Task.js";
import User from "../models/User.js";

/**
 * Task Controller - CRUD operations
 */

export const getAllTasks = async (req, res) => {
  try {
    // TODO: Implement filtering and pagination
    const tasks = await Task.find()
      .populate("createdBy", "name email skills")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks || [],
    });
  } catch (error) {
    console.error("Get tasks error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching tasks",
      error: error.message,
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id).populate("createdBy", "name email bio");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task fetched successfully",
      data: task,
    });
  } catch (error) {
    console.error("Get task error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching task",
      error: error.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, category, skills, dueDate } = req.body;

    // TODO: Implement task creation with user authentication

    const newTask = new Task({
      title,
      description,
      category,
      skills: skills || [],
      dueDate,
      createdBy: "placeholder_user_id",
    });

    res.status(201).json({
      success: true,
      message: "Task structure ready for creation",
    });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating task",
      error: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, category, skills, dueDate } = req.body;

    // TODO: Implement authorization check and task update

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
        category,
        skills,
        dueDate,
      },
      { new: true }
    ).populate("createdBy", "name email");

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating task",
      error: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Implement authorization check and task deletion

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: deletedTask,
    });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting task",
      error: error.message,
    });
  }
};

/**
 * TODO: Additional Task-Related Endpoints
 * 
 * 1. Assign task to a user:
 *    PUT /api/tasks/:id/assign
 *    - Update assignedTo field
 *    - Update status to "assigned"
 * 
 * 2. Get tasks by user:
 *    GET /api/users/:userId/tasks
 *    - Filter tasks created by user
 *    - Filter tasks assigned to user
 * 
 * 3. Search tasks:
 *    GET /api/tasks/search
 *    - Text search on title and description
 *    - Use MongoDB text index
 * 
 * 4. Get popular skills:
 *    GET /api/skills/popular
 *    - Aggregate tasks and count skill usage
 */
