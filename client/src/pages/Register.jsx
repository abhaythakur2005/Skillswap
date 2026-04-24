import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SkillTag from "../components/SkillTag";
import "./Auth.css";

// TODO: Add form validation
// TODO: Call register API
// TODO: Add email verification

const Register = () => {
  const navigate = useNavigate();
  const { login, showNotification } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    skills: [],
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  // Popular skills list for autocomplete
  const popularSkills = [
    "React",
    "JavaScript",
    "Python",
    "Node.js",
    "UI Design",
    "MongoDB",
    "SQL",
    "Java",
    "Web Design",
    "Git",
    "Data Science",
    "Machine Learning",
    "Next.js",
    "Figma",
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Add skill
  const addSkill = (skill) => {
  const trimmedSkill = skill.trim();

  if (trimmedSkill && !formData.skills.includes(trimmedSkill)) {
    setFormData({
      ...formData,
      skills: [...formData.skills, trimmedSkill],
    });
    setSkillInput("");
  }
};
  // Remove skill
  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  // Handle skill input
  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(skillInput);
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      // TODO: Call API endpoint for registration
      // TODO: Send: name, email, password, skills, bio
      // TODO: Handle registration errors and validation

      // Simulate registration
      setTimeout(() => {
        login({
          id: "mock-user-id",
          name: formData.name,
          email: formData.email,
        }, "mock-token");

        showNotification("success", "Registration successful! Welcome to SkillSwap.");
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      showNotification(
        "error",
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Join SkillSwap</h1>
        <p className="auth-subtitle">Create your account and start sharing skills</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Arjun Sharma"
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="••••••••"
              className={errors.passwordConfirm ? "input-error" : ""}
            />
            {errors.passwordConfirm && (
              <span className="error-text">{errors.passwordConfirm}</span>
            )}
          </div>

          {/* Skills Field */}
          <div className="form-group">
            <label htmlFor="skillInput">Add Your Skills</label>
            <div className="skill-input-container">
              <input
                type="text"
                id="skillInput"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={handleSkillKeyPress}
                placeholder="Type a skill and press Enter (e.g., React)"
              />
              <button
                type="button"
                className="btn btn-add-skill"
                onClick={() => addSkill(skillInput)}
              >
                Add
              </button>
            </div>

            {/* Suggested Skills */}
            <div className="suggested-skills">
              {popularSkills
                .filter((skill) => !formData.skills.includes(skill))
                .slice(0, 5)
                .map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className="btn btn-suggest"
                    onClick={() => addSkill(skill)}
                  >
                    + {skill}
                  </button>
                ))}
            </div>

            {/* Selected Skills */}
            {formData.skills.length > 0 && (
              <div className="selected-skills">
                {formData.skills.map((skill) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    removable={true}
                    onRemove={() => removeSkill(skill)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Bio Field */}
          <div className="form-group">
            <label htmlFor="bio">Bio (Optional)</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="I'm a student from India learning web development..."
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-submit" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
