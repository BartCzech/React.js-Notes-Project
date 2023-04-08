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
  render() {
    return (
      <div>
        <p>My notes</p>

        {this.notes.map((note) => {
          return <Note title={note.title} body={note.body} id={note.id} />;
        })}
      </div>
    );
  }
}

export default Notes;
