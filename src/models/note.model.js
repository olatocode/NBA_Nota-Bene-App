const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
const noteModel = mongoose.model("Note", noteSchema);
module.exports = noteModel;
