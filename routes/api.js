const express = require("express");
const router = express.Router();

const noteActions = require('../actions/api/notes');

// Creating notes
router.post("/notes/", noteActions.saveNote);

// Reading notes
router.get("/notes", noteActions.getAllNotes);
// Reading 1 note
router.get("/notes/{id}", noteActions.getNote);

// Updating notes
router.put("/notes/", noteActions.saveNote);

// Deleting notes
router.delete("/notes/", noteActions.saveNote);


module.exports = router;