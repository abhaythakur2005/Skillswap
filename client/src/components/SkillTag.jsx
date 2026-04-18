import React from "react";
import "./SkillTag.css";

// TODO: Add skill filtering
// TODO: Add skill color categorization

const SkillTag = ({ skill, onClick, removable = false, onRemove }) => {
  const skillColor = getSkillColor(skill);

  const handleClick = () => {
    if (onClick) onClick(skill);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) onRemove(skill);
  };

  return (
    <span
      className="skill-tag"
      style={{ backgroundColor: skillColor }}
      onClick={handleClick}
      title={`Click to filter by ${skill}`}
    >
      {skill}
      {removable && (
        <button className="skill-remove" onClick={handleRemove} title="Remove">
          ✕
        </button>
      )}
    </span>
  );
};

// TODO: Add skill color categorization
function getSkillColor(skill) {
  const skillLower = skill.toLowerCase();

  // Map skills to colors
  if (
    skillLower.includes("react") ||
    skillLower.includes("vue") ||
    skillLower.includes("angular") ||
    skillLower.includes("javascript") ||
    skillLower.includes("css") ||
    skillLower.includes("html")
  ) {
    return "#3498db";
  }

  if (
    skillLower.includes("node") ||
    skillLower.includes("express") ||
    skillLower.includes("python") ||
    skillLower.includes("java") ||
    skillLower.includes("php") ||
    skillLower.includes("ruby")
  ) {
    return "#2ecc71";
  }

  if (
    skillLower.includes("mongodb") ||
    skillLower.includes("sql") ||
    skillLower.includes("postgres") ||
    skillLower.includes("mysql") ||
    skillLower.includes("firebase")
  ) {
    return "#9b59b6";
  }

  if (
    skillLower.includes("docker") ||
    skillLower.includes("kubernetes") ||
    skillLower.includes("aws") ||
    skillLower.includes("git") ||
    skillLower.includes("linux")
  ) {
    return "#e67e22";
  }

  return "#95a5a6";
}

export default SkillTag;
