const express = require("express");
const Note = require("../controllers/note.controller");
const router = express.Router();

// The router paths extracted from note controller as follows:
// /newNote
// /removeNote/: _id
// /editNote/:_id
// /viewNote
// /getTitleNote/:title
router.post("/newNote", Note.createNote);

router.delete("/removeNote/:_id", Note.deleteNote);

router.patch("/editNote/:_id", Note.updateNote);

router.get("/viewNote", Note.fetchNotes);

router.get("/getTitleNote/:title", Note.fetchTitleNote);

module.exports = router;
