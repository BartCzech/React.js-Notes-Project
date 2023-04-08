const express = require("express");
const router = express.Router();

const noteActions = require('../actions/api/noteActions');

// Reading notes
router.get("/notes", noteActions.getAllNotes);
// Reading 1 note
router.get("/notes/:id", noteActions.getNote);

// Creating notes
router.post("/notes", noteActions.saveNote);

// Updating notes
router.put("/notes", noteActions.updateNote);

// Deleting notes
router.delete("/notes", noteActions.deleteNote);


module.exports = router;