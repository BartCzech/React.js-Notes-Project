import React, { useState } from "react";

function Note(props) {

  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  }

  return (
    <div className="note">
      <p onClick={() => toggleDesc()}>{props.title}</p>
      {showDesc && (
        <div className="description">{props.body}</div>
      )}
      <button>Edit</button>
      <button 
        className="delete"
        onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Note;