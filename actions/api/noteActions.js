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
    const title = req.body.title;
    const body = req.body.body;

    res.send('Note created! :) Title: ' + title + ' Body: ' + body);

  }

  async getAllNotes(req, res) {
    let doc;
    try {
      doc = await Note.find({});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
    console.log(doc);
    res.status(200).json(doc);
  }

  getNote(req, res) {
    res.send('Note info')
  }

  updateNote(req, res) {
    res.send('Note updated!')
  }

  deleteNote(req, res) {
    const id = req.params.id;
    res.send('Note deleted. Note ID: ' + id)
  }
};

module.exports = new NoteActions();