const express = require("express");
const Note = require("../controllers/note.controller");
const router = express.Router();

router.post("/new-note", Note.createNote);

router.delete("/remove-note/:_id", Note.deleteNote);

router.patch("/edit-note/:_id", Note.updateNote);

router.get("/view-note", Note.fetchNotes);

router.get("/title-note/:title", Note.fetchTitleNote);

module.exports = router;
