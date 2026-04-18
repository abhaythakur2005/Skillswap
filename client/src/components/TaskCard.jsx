import React from "react";
import { Link } from "react-router-dom";
import SkillTag from "./SkillTag";
import "./TaskCard.css";

// TODO: Add edit task functionality
// TODO: Add delete task functionality
// TODO: Add accept/volunteer button

const TaskCard = ({ task, onView, onEdit, onDelete, isOwner = false }) => {
  // Default callbacks
  const handleView = onView || (() => console.log("View task", task._id));
  const handleEdit = onEdit || (() => console.log("Edit task", task._id));
  const handleDelete = onDelete || (() => console.log("Delete task", task._id));

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status color
  const getStatusColor = (status) => {
    const colors = {
      open: "#4CAF50",
      assigned: "#FF9800",
      completed: "#2196F3",
    };
    return colors[status] || "#999";
  };

  return (
    <div className="task-card">
      {/* Header */}
      <div className="task-header">
        <div className="task-info">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-creator">
            Posted by <strong>{task.createdBy?.name || "Anonymous"}</strong>
          </p>
        </div>
        <span
          className="task-status"
          style={{ backgroundColor: getStatusColor(task.status) }}
        >
          {task.status}
        </span>
      </div>

      {/* Description */}
      <p className="task-description">{task.description}</p>

      {/* Category and Date */}
      <div className="task-meta">
        <span className="task-category">{task.category}</span>
        <span className="task-date">{formatDate(task.createdAt)}</span>
      </div>

      {/* Skills */}
      {task.skills && task.skills.length > 0 && (
        <div className="task-skills">
          {task.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="task-actions">
        <button className="btn btn-view" onClick={handleView}>
          View Details
        </button>

        {/* TODO: Enable edit and delete for task owner */}
        {isOwner && (
          <>
            <button className="btn btn-edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-delete" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}

        {/* TODO: Volunteer/Accept button for other users */}
        {!isOwner && task.status === "open" && (
          <button className="btn btn-volunteer">Volunteer</button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
