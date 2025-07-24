import React, { useRef, useEffect } from "react";

function ProjectListItem(props) {
  const {
    project,
    isEditing,
    editValue,
    error,
    // Handler props to be provided
  } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className="project-list-item">
      {isEditing ? (
        <div>
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            // onChange, onKeyDown, onBlur handlers required
          />
          {error && <div className="error-message">{error}</div>}
        </div>
      ) : (
        <>
          <span className="project-name">{project.name}</span>
          <button
            className="edit-btn"
            // onClick handler required
          >
            Edit
          </button>
        </>
      )}
    </li>
  );
}

export default ProjectListItem;
