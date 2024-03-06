import express from "express";
import bodyParser from "body-parser";

const cors = require("cors");

//Enable express
const app = express();

//env file
require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server connected");
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
