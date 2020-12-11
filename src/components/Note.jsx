import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

//define function component 'Note' to be used in 'App.jsx'
function Note(props) { //here props 'object' contains atrributes as key-value pairs
    //function to handle event of clicking 'Delete' button
    function handleClick() {
        //onDelete function is called passing 'id' from 'props' object
        props.onDelete(props.id);
    }

    return (
        <div className="note">
        <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    );
}

//export 'Note' function component as default export
export default Note;