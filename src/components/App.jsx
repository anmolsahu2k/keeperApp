//import React and useState from npm-installed react module
import React, { useState } from "react";
//import 'Header' function component from 'Header.jsx' file
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//defining function component 'App' to be used in 'index.js'
function App() {
    //state varaible 'notes' is initialized as an empty array denoting the current state value 
    //state function 'setNotes' lets you update state variable
    const [notes, setNotes] = useState([]);

    //function to add new note to 'notes' array
    function addNote(newNote) {
        //update state variable 'notes' and add a new note 'newNote' at the end
        setNotes(prevNotes => {

            return [
                //previous state of 'notes' array
                ...prevNotes,
                newNote
            ];
        });
    }

    //function to delete existing note from 'notes' array using 'id'(index of note)
    function deleteNote(id) {
        //update state variable 'notes' and delete note by matching id using .filter()
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    //return the HTML to be rendered
    return (
        <div>
      {/*Header function component*/}
      <Header />
      {/*CreateArea function component*/}
      {/*onAdd attribute is passed to the component as a single object called 'props'*/}
      <CreateArea onAdd={addNote} />
      {/*state variable 'notes' is iterated and callback function is called for each of the array items*/}
      {notes.map((noteItem, index) => {
        return (
          //Note function component
          <Note
            //attributes passed as a single object 'props'
            key={index}//key attribute required
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
    );
}

//export 'App' function component as default export
export default App;