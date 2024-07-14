import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Notes App</h1>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
