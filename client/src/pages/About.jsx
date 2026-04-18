import React from "react";
import "./About.css";

// TODO: Add team member profiles
// TODO: Add testimonials
// TODO: Add FAQ section

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SkillSwap</h1>
          <p>Empowering students to learn together, grow together</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p>
            SkillSwap is a peer-to-peer learning platform designed to help students across India
            connect, collaborate, and learn from each other. We believe that learning is not a
            solitary activity, but a collective journey where everyone can be both a teacher and
            a learner.
          </p>
          <p>
            Our mission is to break down barriers to quality education and foster a community where
            knowledge flows freely and opportunities for growth are unlimited.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-section about-features">
        <div className="about-container">
          <h2>Why SkillSwap?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Learn from Peers</h3>
              <p>Get help from students who have recently mastered the skills you want to learn.</p>
            </div>
            <div className="feature-item">
              <h3>Share Your Knowledge</h3>
              <p>Teach others what you know and build your portfolio while helping the community.</p>
            </div>
            <div className="feature-item">
              <h3>Build Your Network</h3>
              <p>Connect with like-minded learners, collaborators, and future colleagues.</p>
            </div>
            <div className="feature-item">
              <h3>Real-World Skills</h3>
              <p>Learn practical, project-based skills that matter in the tech industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Built With Modern Tech</h2>
          <p>SkillSwap is built using the MERN stack - a powerful combination of technologies that
            powers modern web applications:</p>
          
          <div className="tech-stack">
            <div className="tech-item">
              <h4>MongoDB</h4>
              <p>NoSQL database for flexible data storage</p>
            </div>
            <div className="tech-item">
              <h4>Express.js</h4>
              <p>Backend framework for building robust APIs</p>
            </div>
            <div className="tech-item">
              <h4>React</h4>
              <p>Frontend library for building interactive user interfaces</p>
            </div>
            <div className="tech-item">
              <h4>Node.js</h4>
              <p>JavaScript runtime for server-side development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="about-section about-creator">
        <div className="about-container">
          <h2>Created By</h2>
          <div className="creator-card">
            <div className="creator-info">
              <h3>Gaurav Sharma</h3>
              <p className="creator-role">MERN Stack Developer | Full Stack Engineer | Educator</p>
              <p className="creator-bio">
                A passionate full-stack developer dedicated to creating educational platforms that
                empower students to learn and grow. Built SkillSwap as a teaching tool for MERN
                stack students to understand real-world application development.
              </p>
              <p className="creator-bio">
                This project is designed for live classroom teaching, allowing students to see how
                a complete MERN application is structured, from database design to user interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>What You'll Learn</h2>
          <div className="learning-goals">
            <div className="goal-item">
              <span className="goal-icon">🏗️</span>
              <h4>Project Architecture</h4>
              <p>Understand how to structure a full-stack application</p>
            </div>
            <div className="goal-item">
              <span className="goal-icon">🗄️</span>
              <h4>Database Design</h4>
              <p>Learn MongoDB schema design and Mongoose modeling</p>
            </div>
            <div className="goal-item">
              <span className="goal-icon">🔌</span>
              <h4>API Development</h4>
              <p>Build RESTful APIs with Express and Node.js</p>
            </div>
            <div className="goal-item">
              <span className="goal-icon">⚛️</span>
              <h4>React Frontend</h4>
              <p>Create interactive UIs with React and modern hooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="about-container">
          <h2>Ready to Join?</h2>
          <p>Start learning and sharing your skills with thousands of students across India</p>
          <a href="/register" className="btn btn-cta-about">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
