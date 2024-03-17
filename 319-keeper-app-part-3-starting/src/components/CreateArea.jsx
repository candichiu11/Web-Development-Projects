import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });


  function handleChange(event) {
    const {value, name} = event.target;

    setNote(prevNote => {
      return {  
        ...prevNote,
        [name]: value
       }

      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevNote.content
      //   }
      // } else if (name === "content") {
      //   return {
      //     title: prevNote.title,
      //     content: value
      //   }
      // }
    })
  }

  function handleSubmit(event) {
      event.preventDefault();
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
