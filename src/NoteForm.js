import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      onAdd(title, content);
      setTitle("");
      setContent("");
      setError("");
    } else {
      setError(alert("Please enter both title and content."));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <form onSubmit={handleSubmit} className="w-25 mt-3 px-3 py-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-0 fw-bold fs-4"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-0 fs-5"
          ></textarea>
          <button type="submit" className="btn">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
