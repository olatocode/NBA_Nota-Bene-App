/** @format */
require('dotenv').config();
const app = require('./src/app');
const { PORT } = process.env;
// Server Connection
app.listen(PORT, () => {
  console.log(`NBA is listening on port ${PORT}...`);
});
