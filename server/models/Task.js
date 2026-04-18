import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a task title"],
      trim: true,
      minlength: 5,
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Please provide a task description"],
      minlength: 10,
      maxlength: 1000,
    },
    category: {
      type: String,
      enum: ["Learning", "Help Needed", "Skill Exchange", "Collaboration"],
      default: "Learning",
    },
    skills: {
      type: [String],
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    status: {
      type: String,
      enum: ["open", "assigned", "completed"],
      default: "open",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// TODO: Add database indexes for performance
// TODO: Add text search index for title and description

const Task = mongoose.model("Task", taskSchema);

export default Task;
