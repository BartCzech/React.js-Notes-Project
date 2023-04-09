import React from "react";
import "./Notes.css";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
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
      ]
    };
  }

  deleteNote(id) {
    console.log("Deleting note: " + id);
    const notes = [...this.state.notes].filter(note => note.id !== id);
    this.setState({notes});
  }

  render() {
    return (
      <div>
        <p>My notes</p>

        <NewNote />
        {this.state.notes.map((note) => (
          <Note 
            key={note.id}
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
