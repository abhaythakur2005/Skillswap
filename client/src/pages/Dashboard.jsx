import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import TaskCard from "../components/TaskCard";
import SkillTag from "../components/SkillTag";
import { useApi } from "../hooks/useApi";
import API from "../services/api";
import "./Dashboard.css";

// TODO: Add edit profile
// TODO: Add task creation API
// TODO: Add task deletion
// TODO: Add task statistics

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAppContext();
  const { data: userTasks, execute: fetchTasks } = useApi();

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "Learning",
    skills: [],
  });

  const [skillInput, setSkillInput] = useState("");

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Fetch user's tasks
  useEffect(() => {
    const loadTasks = async () => {
      try {
        // TODO: Fetch tasks from API endpoint
        // TODO: Filter to show only current user's tasks

        // Mock data for testing
        setTasks([
          {
            _id: "1",
            title: "Need help with React Hooks",
            description:
              "I'm struggling with custom hooks and context API...",
            category: "Help Needed",
            skills: ["React", "JavaScript"],
            status: "open",
            createdBy: user,
            createdAt: new Date(),
          },
        ]);
      } catch (error) {
        console.error("Error loading tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user]);

  // Handle new task input
  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  // Add skill to new task
  const addSkillToTask = (skill) => {
    if (skill && !newTask.skills.includes(skill)) {
      setNewTask({
        ...newTask,
        skills: [...newTask.skills, skill],
      });
      setSkillInput("");
    }
  };

  // Remove skill from new task
  const removeSkillFromTask = (skill) => {
    setNewTask({
      ...newTask,
      skills: newTask.skills.filter((s) => s !== skill),
    });
  };

  // Handle skillInput key press
  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkillToTask(skillInput);
    }
  };

  // Handle task creation
  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (!newTask.title || !newTask.description) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // TODO: Call API to create task
      // TODO: Add error handling and validation

      // Mock: Add task to local state
      const createdTask = {
        _id: Date.now().toString(),
        ...newTask,
        createdBy: user,
        status: "open",
        createdAt: new Date(),
      };

      setTasks([createdTask, ...tasks]);
      setNewTask({
        title: "",
        description: "",
        category: "Learning",
        skills: [],
      });
      setShowCreateForm(false);

      alert("Task created successfully!");
    } catch (error) {
      alert("Error creating task");
      console.error(error);
    }
  };

  // Handle task delete
  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      // TODO: Call API to delete task
      setTasks(tasks.filter((task) => task._id !== taskId));
      alert("Task deleted successfully!");
    }
  };

  if (loading) {
    return <div className="dashboard-loading">Loading your dashboard...</div>;
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="user-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="header-info">
            <h1>Welcome, {user?.name}</h1>
            <p className="header-subtitle">Manage your tasks and skills</p>
          </div>
        </div>

        {/* TODO: Add edit profile button */}
        <button className="btn btn-edit-profile">Edit Profile</button>
      </div>

      {/* Stats Section */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value">{tasks.length}</div>
            <div className="stat-label">Tasks Posted</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value">0</div>
            <div className="stat-label">Tasks Completed</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-value">{user?.skills?.length || 0}</div>
            <div className="stat-label">Skills</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="dashboard-section">
        <h2>Your Skills</h2>
        <div className="skills-container">
          {user?.skills && user.skills.length > 0 ? (
            user.skills.map((skill) => <SkillTag key={skill} skill={skill} />)
          ) : (
            <p className="empty-state">
              No skills added yet.{" "}
              <button className="link-btn">Add skills</button>
            </p>
          )}
        </div>
      </div>

      {/* Create Task Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2>Post a New Task</h2>
          <button
            className="btn btn-toggle"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? "Cancel" : "Post Task"}
          </button>
        </div>

        {showCreateForm && (
          <form className="create-task-form" onSubmit={handleCreateTask}>
            {/* Title */}
            <div className="form-group">
              <label>Task Title *</label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleTaskChange}
                placeholder="What do you need help with or want to teach?"
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={newTask.description}
                onChange={handleTaskChange}
                placeholder="Provide details about your task or learning request..."
                rows="4"
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={newTask.category} onChange={handleTaskChange}>
                <option value="Learning">Learning</option>
                <option value="Help Needed">Help Needed</option>
                <option value="Skill Exchange">Skill Exchange</option>
                <option value="Collaboration">Collaboration</option>
              </select>
            </div>

            {/* Skills */}
            <div className="form-group">
              <label>Skills Required</label>
              <div className="skill-input-container">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillKeyPress}
                  placeholder="Type a skill and press Enter"
                />
                <button
                  type="button"
                  className="btn btn-add-skill"
                  onClick={() => addSkillToTask(skillInput)}
                >
                  Add
                </button>
              </div>

              {newTask.skills.length > 0 && (
                <div className="selected-skills">
                  {newTask.skills.map((skill) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      removable={true}
                      onRemove={() => removeSkillFromTask(skill)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-create">
              Create Task
            </button>
          </form>
        )}
      </div>

      {/* Tasks Section */}
      <div className="dashboard-section">
        <h2>Your Posted Tasks</h2>

        {tasks.length > 0 ? (
          <div className="tasks-list">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                isOwner={true}
                onDelete={() => handleDeleteTask(task._id)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>📭 You haven't posted any tasks yet</p>
            <button
              className="btn btn-primary"
              onClick={() => setShowCreateForm(true)}
            >
              Post your first task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
