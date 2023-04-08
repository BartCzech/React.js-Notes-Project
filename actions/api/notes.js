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
};
