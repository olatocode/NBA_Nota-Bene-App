const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./routes/note.route");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database Not Connected`);
  }
};

connectDB();

app.use("/api/v1", noteRouter);

app.listen(port, () => {
  console.log(`NBA is listening on port ${port}...`);
});
