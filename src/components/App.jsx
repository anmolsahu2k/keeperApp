import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    function addNote(inputText) {
        setNotes((prevValue) => {
            return [...prevValue, inputText];
        });
    }

    function deleteNote(id) {
        setNotes((prevValue) => {
            return prevValue.filter((noteItem, index) => {
                return index != id;
            });
        });
    }

    const [notes, setNotes] = useState([]);

    return (
        <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
    );
}

export default App;