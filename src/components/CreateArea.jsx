import React, { useState } from "react";

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        // console.log(event.target)
        const { name, value } = event.target;
        setInputText((prevValue) => {
            return { ...prevValue, [name]: value };
        });
        // console.log(inputText);
    }

    function submitNote(event) {
        props.onAdd(inputText);
        event.preventDefault();
        setInputText({ title: "", content: "" });
    }

    return (
        <div>
      <form>
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={(event) => {
            handleChange(event);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
    );
}

export default CreateArea;