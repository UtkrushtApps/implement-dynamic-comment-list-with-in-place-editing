import React, { useState } from "react";
import ProjectListItem from "./ProjectListItem.jsx";

const initialProjects = [
  { id: 1, name: "Website Redesign" },
  { id: 2, name: "Mobile App" },
  { id: 3, name: "Marketing Campaign" },
];

function ProjectList() {
  const [projects, setProjects] = useState(initialProjects);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState("");

  // Implementation required

  return (
    <div>
      <ul className="project-list">
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            isEditing={editingId === project.id}
            editValue={editingId === project.id ? editValue : undefined}
            error={editingId === project.id ? error : undefined}
            // Handlers required
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
