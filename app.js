import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, console.log(`NBA is listening to port ${port}`));
