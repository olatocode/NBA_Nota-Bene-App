import Note from "../models/note.model";

exports.add_Note = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({ title, description });
    await newNote.save();

    return res.status(400).json({
      success: true,
      newNote,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Please fill in the field",
    });
    await newNote.save();
  }
};
