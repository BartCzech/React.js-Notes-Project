import React from "react";
import "./Notes.css";
import Note from "./Note/Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.notes = [
      {
        id: "2323",
        title: "Take a shower",
        body: "Remember to use the special shampoo.",
      },
      {
        id: "2324",
        title: "Alışveriş yap",
        body: "Süt, tereyağı, şerbet.",
      },
    ];
  }

  deleteNote(id) {
    console.log("Deleting note: " + id);
    const notes = [...this.notes].filter(note => note.id !== id);
    this.notes = notes;
  }

  render() {
    return (
      <div>
        <p>My notes</p>

        {this.notes.map((note) => (
          <Note 
            title={note.title} 
            body={note.body} 
            id={note.id} 
            onDelete = {(id) => this.deleteNote(id)} />
        ))}
      </div>
    );
  }
}

export default Notes;
