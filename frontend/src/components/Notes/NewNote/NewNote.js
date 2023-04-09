import React, { useState } from "react";

function NewNote(props) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const changeDescHandler = (event) => {
    const value = event.target.value;
    setDesc(value);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const addNote = () => {
    const note = {
      title: title,
      body: desc,
    };
    props.onAdd(note);

    setTitle("");
    setDesc("");
    showFormHandler();
  };

  return showForm ? (
    <div className="note">
      <label>Title:</label>
      <input type="text" value={title} onChange={changeTitleHandler} />
      <label>Description:</label>
      <input type="text" value={desc} onChange={changeDescHandler} />

      <button onClick={() => addNote()}>Add note</button>
    </div>
  ) : (
    <button onClick={showFormHandler}>Add new note</button>
  );
}

export default NewNote;
