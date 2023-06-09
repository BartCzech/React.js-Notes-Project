import React from "react";
import "./Notes.css";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import Modal from "react-modal";
import EditNote from "../EditNote/EditNote";
import axios from '../../axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showEditModal: false,
      editNote: {}
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const res = await axios.get('/notes');
    const notes = res.data;

    this.setState({ notes });
  }

  async deleteNote(_id) {
    console.log("Deleting note: " + _id);
    const notes = [...this.state.notes].filter((note) => note._id !== _id);
    await axios.delete('/notes/' + _id);
    this.setState({ notes });
  }

  async addNote(note) {
    const notes = [...this.state.notes];
    // add to backend
    try {
      const res = await axios.post('/notes', note);
      const newNote = res.data;
      // add to frontend
      notes.push(newNote);
      this.setState({ notes });
    } catch (err) {
      NotificationManager.error(err.response.data.message); 
    };
  }

  async editNote(note) {
    const notes = [...this.state.notes];

    // edit backend
    try {
      await axios.put('/notes/' + note._id, note);

      // edit frontend
      const index = notes.findIndex(x => x._id === note._id );
      if (index >= 0) {
        notes[index] = note;  
        this.setState({ notes });
      }
      this.toggleModal();
    } catch (err) {
      NotificationManager.error(err.response.data.message); 
    }
  }

  toggleModal() {
    this.setState({showEditModal: !this.state.showEditModal});
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note })
  }

  render() {
    return (
      <div>
        <NotificationContainer />

        <p>My notes</p>

        <NewNote onAdd={(note) => this.addNote(note)} />

        <Modal isOpen={this.state.showEditModal} contentLabel="Edit the note">
          <EditNote 
            title={this.state.editNote.title}
            body={this.state.editNote.body}
            _id={this.state.editNote._id}
            onEdit={note => this.editNote(note)} />
          <button onClick={() => this.toggleModal()}>Cancel</button>
        </Modal>

        {this.state.notes.map((note) => (
          <Note
            key={note._id}
            title={note.title}
            body={note.body}
            _id={note._id}
            onEdit={(note) => this.editNoteHandler(note)}
            onDelete={(_id) => this.deleteNote(_id)}
          />
        ))}
      </div>
    );
  }
}

export default Notes;
