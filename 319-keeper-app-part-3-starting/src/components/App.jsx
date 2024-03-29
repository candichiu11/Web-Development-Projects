import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function handleDelete(id) {
    setNotes(prevNotes => {
       return prevNotes.filter((note, index) => {
          return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />

      {notes.map((note, index) => (
        <Note 
          key={index}
          id={index} 
          title={note.title}
          content={note.content} 
          onDelete={handleDelete}
        /> 
       ))}
      
      <Footer />
    </div>
  );
}

export default App;
