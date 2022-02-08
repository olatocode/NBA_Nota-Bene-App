const Note = require("../models/note.model");

// create new note
exports.createNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({
      title,
      description,
    });
    await newNote.save();

    return res.status(201).json({
      success: true,
      newNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "please fill the required fields",
    });
  }
};

// Delete a note
exports.deleteNote = async (req, res, next) => {
  try {
    const id = req.params;
    const note = await Note.findOneAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please Check details and try again",
    });
  }
};

// update note

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
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error, try again!",
    });
  }
};

// view all notes
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
      message: "An Error Occurred, try again!",
    });
  }
};

// search note by title

exports.fetchTitleNote = async (req, res, next) => {
  try {
    const { title } = req.params;

    const findNote = await Note.findOne({ title: title });
    return res.status(200).json({
      success: true,
      findNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "please try again",
    });
  }
};
