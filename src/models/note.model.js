import mongoose from "mongoose";
import { model } from "mongoose";

const new_NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const noteModel = model("Note", new_NoteSchema);
module.exports = noteModel;
