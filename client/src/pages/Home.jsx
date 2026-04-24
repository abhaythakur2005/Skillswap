import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import API from "../services/api";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 👇 ref for smooth scroll
  const tasksRef = useRef(null);

  // Fetch tasks on page load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await API.get("/tasks");

        console.log("TASKS RESPONSE:", res.data);

        // handle both formats safely
        setTasks(res.data.tasks || res.data || []);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleViewTask = (taskId) => {
    console.log("View task:", taskId);
    navigate(`/task/${taskId}`);
  };

  return (
    <div className="home">

      {/* HERO SECTION */}
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
                tasksRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Browse Tasks
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features-container">

          <div className="feature-card">
            <h3>Learn</h3>
            <p>Ask for help and learn from peers.</p>
          </div>

          <div className="feature-card">
            <h3>Share</h3>
            <p>Help others and build your reputation.</p>
          </div>

          <div className="feature-card">
            <h3>Connect</h3>
            <p>Find collaborators and grow your network.</p>
          </div>

        </div>
      </section>

      {/* TASKS SECTION */}
      <section className="tasks-section" ref={tasksRef}>
        <div className="section-header">
          <h2>Recent Tasks</h2>
          <p>Browse learning requests from the community</p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="loading">
            Loading tasks...
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}

        {/* TASK LIST */}
        {!loading && !error && tasks.length > 0 ? (
          <div className="tasks-grid">
            {tasks.slice(0, 6).map((task) => (
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
              <p>No tasks available yet</p>
              <p>Be the first to post a learning request</p>
            </div>
          )
        )}

        {/* LOAD MORE */}
        {tasks.length > 6 && (
          <div className="load-more">
            <button className="btn btn-secondary">
              Load More Tasks
            </button>
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to start learning?</h2>
        <p>Join thousands of students growing together</p>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Home;