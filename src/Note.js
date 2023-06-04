import React, { useState } from "react";

const Note = ({ id, title, content, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedTitle.trim() !== "" && updatedContent.trim() !== "") {
      onEdit(id, updatedTitle, updatedContent);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const renderNoteDisplay = () => {
    return (
      <div className="container-fluid">
        <div className="row note">
          <h3>{title}</h3>
          <p>{content}</p>
          <div className="note-actions">
            <button onClick={handleEdit} className="btn-1">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => onDelete(id)} className="btn-1 mx-2">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderNoteEdit = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="note">
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              ></textarea>
              <div className="note-actions">
                <button className="btn-1" onClick={handleSave}>
                  <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <button className="btn-1 mx-2" onClick={handleCancel}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return isEditing ? renderNoteEdit() : renderNoteDisplay();
};

export default Note;
