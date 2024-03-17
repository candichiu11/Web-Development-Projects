import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpand() {
    setExpand(true)
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <Icon path={mdiPlus} size={1} />
          </Fab>
        </Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
