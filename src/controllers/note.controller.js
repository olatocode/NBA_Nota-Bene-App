const Note = require("../models/note.model");

// To create a new note using 'title' & 'description'
exports.createNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(404).json({
        message: "Note not Found! Fill in the required fields",
      });
    }
    const newNote = await Note.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note Created Successfully",
      newNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// To delete a note by using unique 'id' value
exports.deleteNote = async (req, res, next) => {
  try {
    const id = req.params;
    const removeNote = await Note.findOneAndDelete({ _id: id });
    if (!removeNote) {
      return res.status(404).json({
        message: "Note not found! Fill in the required details",
      });
    }
    return res.status(200).json({
      message: "Note Deleted Successfully",
      removeNote,
    });
  } catch (error) {
    return res.status(500).json({
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
    if (!noteUpdate) {
      return res.status(404).json({
        message: "Note not found! Fill in the required details",
      });
    }
    return res.status(200).json({
      message: "Note Updated Successfully",
      noteUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// To show all created note in the database
exports.fetchNotes = async (req, res, next) => {
  try {
    const allNote = await Note.find();
    return res.status(200).json({
      message: "All Note view Successfully",
      allNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// To search created note with the value of 'title'

exports.fetchTitleNote = async (req, res, next) => {
  try {
    const { title } = req.params;

    const findNoteTitle = await Note.find({ title: title });
    // if (!findNoteTitle) {
    //   return res.status(404).json({
    //     message: "Note not Found! Fill in the required details",
    //   });
    // }
    return res.status(200).json({
      message: "A Note view Successfully ",
      findNoteTitle,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
