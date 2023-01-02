/** @format */

const express = require('express');
const noteRouter = require('./routes/note.route');
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
app.use(express.json());
app.use(mongoSanitize());
dotenv.config();

const { PORT } = process.env;

// extracting database connection from DB folder
const DB = require('./DB/connectDB');
DB.connectDB();

// base root url
app.get('/', (req, res) => {
  res.send({ Home: 'Welcome To Nota Bene App!' });
});

// The base endpoint url is '/api/v1'
app.use('/api/v1', noteRouter);

// Server Connection
app.listen(PORT, () => {
  console.log(`NBA is listening on port ${PORT}...`);
});
