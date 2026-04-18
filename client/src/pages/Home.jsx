import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import { useApi } from "../hooks/useApi";
import API from "../services/api";
import "./Home.css";

// TODO: Add task filtering
// TODO: Add search functionality
// TODO: Add pagination

const Home = () => {
  const navigate = useNavigate();
  const { data: tasks, loading, error, execute } = useApi();
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await execute(() => API.get("/tasks"));
        if (response.data) {
          setFilteredTasks(response.data);
        }
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  const handleViewTask = (taskId) => {
    // TODO: Navigate to task detail page
    console.log("View task:", taskId);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">SkillSwap</h1>
          <p className="hero-subtitle">
            Learn together, grow together
          </p>
          <p className="hero-description">
            Connect with students across India. Share your skills, get help, build your network.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                // TODO: Scroll to tasks section
              }}
            >
              Browse Tasks
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-stat">
            <div className="stat-number">2000+</div>
            <div className="stat-text">Students Connected</div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <h3>Learn</h3>
            <p>Ask for help. Get answers from peers learning the same skills.</p>
          </div>

          <div className="feature-card">
            <h3>Share</h3>
            <p>Help others. Build your reputation by solving real problems.</p>
          </div>

          <div className="feature-card">
            <h3>Connect</h3>
            <p>Network. Find collaborators, study partners, and friends.</p>
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="tasks-section">
        <div className="section-header">
          <h2>Recent Tasks</h2>
          <p>Browse learning requests from the community</p>
        </div>

        {loading && <div className="loading">Loading tasks...</div>}

        {error && (
          <div className="error-message">
            Error loading tasks: {error}
          </div>
        )}

        {filteredTasks && filteredTasks.length > 0 ? (
          <div className="tasks-grid">
            {filteredTasks.slice(0, 6).map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onView={() => handleViewTask(task._id)}
              />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="no-tasks">
              <p>No tasks yet</p>
              <p>Post your first request and connect with learners</p>
            </div>
          )
        )}

        {/* TODO: Load More button */}
        {filteredTasks && filteredTasks.length > 6 && (
          <button className="btn btn-load-more">Load More Tasks</button>
        )}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to start learning?</h2>
        <p>Join thousands of students learning and growing together</p>
        <button
          className="btn btn-cta"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
