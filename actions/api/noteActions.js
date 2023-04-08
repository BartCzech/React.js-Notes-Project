const Note = require("../../db/models/note");

class NoteActions {
  saveNote(req, res) {
    // const newNote = new Note({ 
    //   title: "Shopping list", 
    //   body: "Meat yoghurt" 
    // });

    // newNote.save().then(() => {
    //   console.log("Note saved!");
    // });
    res.send('Note created! :)')

  }

  getAllNotes(req, res) {
    res.send('API working! :)')
  }

  getNote(req, res) {
    res.send('Note info')
  }

  updateNote(req, res) {
    res.send('Note updated!')
  }

  deleteNote(req, res) {
    res.send('Note deleted')
  }
};

module.exports = new NoteActions();