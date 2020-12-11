import React, { useState } from "react";
//import from material-ui dependency
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

//defining function 'CreateArea' to be used in 'App.jsx'
function CreateArea(props) { //here props 'object' contains atrributes as key-value pairs

    //state hook for storing whether the textarea is expanded or not
    const [isExpanded, setExpanded] = useState(false);

    //state variable 'note' intialized as object with keys 'title' and 'content' 
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //function to handle event of any change ('onChange') in input fields ('title' and 'content')
    function handleChange(event) {
        //Destructure and store 'name' and 'value' from 'event.target' object
        const { name, value } = event.target;
        //update 'note' object
        setNote((prevNote) => {
            return {
                //previous state of 'note' object
                ...prevNote,
                //add 'title' or 'content' key and its corrresponding value from the input field
                //name is a variable hence to access stored string
                [name]: value
            };
        });
    }
    //function to handle event of clicking 'Add' button
    function submitNote(event) {
        //onAdd function is called passing 'note' object
        props.onAdd(note);
        //'note' object is reset after adding the note
        setNote({
            title: "",
            content: ""
        });
        //to prevent reloading of the page after form button is clicked 
        event.preventDefault();
    }

    //function to set 'isExpanded' state variable to true
    function expand() {
        setExpanded(true);
    }

    //return the HTML to be rendered
    return (
        <div>
      <form className="create-note">
        {/*check if 'isExpanded' is true the render HTML after &&*/}
        {isExpanded && (
          //'title' input field 
          <input
            name="title"//to identify this input field as 'title'
            onChange={handleChange}//on change call function 'handleChange'
            value={note.title}//assign value of 'note.title' to attribute 'value'
            placeholder="Title"
          />
        )}
        {/*'content' input field*/}
        <textarea
          name="content"//to identify this input field as 'title'
          onClick={expand}//on click call function 'expand'
          onChange={handleChange}//on change call function 'handleChange'
          value={note.content}//assign value of 'note.content' to attribute 'value'
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}//if isExpanded is true rows=3 else rows=1
        />
        {/*Function components from material-ui*/}
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
    );
}

//export 'CreateArea' function component as default export
export default CreateArea;