import React from "react";

function NewNote(props) {
  return (
    <div className="note">
      <label>Title:</label>
      <input type="text"></input>
      <label>Description:</label>
      <input type="text"></input>

      <button>Add note</button>
    </div>
  );
}

export default NewNote;
