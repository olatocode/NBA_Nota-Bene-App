const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./routes/note.route");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database Not Connected`);
  }
};
connectDB();

// The app path in string
// app.use("/api/v1", noteRouter);

// Server Connection
app.listen(port, () => {
  console.log(`NBA is listening on port ${port}...`);
});
