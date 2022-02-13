const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// To create a new schema for Note.
const noteSchema = new Schema({
  title: {
    type: String,
    maxlength: 500,
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
    required: true,
  },
  Date: { type: Date, default: Date.now },

});
// To convert noteSchema into a model of 'Note'.
const noteModel = mongoose.model("Note", noteSchema); 
module.exports = noteModel;
