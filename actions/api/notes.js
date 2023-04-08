const Note = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({ 
      title: "Shopping list", 
      body: "Meat yoghurt" 
    });

    newNote.save().then(() => {
      console.log("Note saved!");
    });
  },

  getAllNotes(req, res) {
    res.send('..')
  },

  getNote(req, res) {
    res.send('..')
  },

  updateNote(req, res) {
    res.send('..')
  },

  deleteNote(req, res) {
    res.send('..')
  },
};
