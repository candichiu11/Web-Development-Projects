import React from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

<Icon path={mdiDelete} size={1} />

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><Icon path={mdiDelete} size={1} /></button>
    </div>
  );
}

export default Note;
