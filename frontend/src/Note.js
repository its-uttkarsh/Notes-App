import React from 'react';
import './Note.css';

const Note = ({ note, index, deleteNote }) => {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(index)}>Delete</button>
    </div>
  );
};

export default Note;
