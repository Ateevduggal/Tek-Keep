import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Header from "./Header";
import Copy from "./Copy";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  const handleEditNote = (id, updatedTitle, updatedContent) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: updatedTitle,
          content: updatedContent,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <>
      <Header />
      <NoteForm onAdd={handleAddNote} />
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
      <Copy />
    </>
  );
};

export default App;
