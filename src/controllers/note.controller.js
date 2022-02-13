const Note = require("../models/note.model");

// write if statement for deleteNote, updateNote and note by title.

// To create a new note using 'title' & 'description'
exports.createNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({
      title,
      description,
    });
    await newNote.save();

    return res.status(200).json({
      success: true,
      newNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// To delete a note by using unique 'id' value
exports.deleteNote = async (req, res, next) => {
  try {
    const id = req.params;
    const note = await Note.findOneAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// To update a note by referencing the 'id' value,
// with 'title' and 'description'.

exports.updateNote = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const noteUpdate = await Note.findOneAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      noteUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// To show all created note in the database
exports.fetchNotes = async (req, res, next) => {
  try {
    const note = await Note.find();
    return res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// To search any note created with value of the 'title'

exports.fetchTitleNote = async (req, res, next) => {
  try {
    const { title } = req.params;

    const findNote = await Note.findOne({ title: title });
    return res.status(200).json({
      success: true,
      findNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
