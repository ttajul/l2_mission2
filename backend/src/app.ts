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


const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// // Converts local file information to a GoogleGenerativeAI.Part object.
// function fileToGenerativePart(path: any, mimeType:any) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType
//     },
//   };
// }

// async function run() {
//   // For text-and-image input (multimodal), use the gemini-pro-vision model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const prompt = "What's different between these pictures?";

//   const imageParts = [
//     fileToGenerativePart("image1.png", "image/png"),
//     fileToGenerativePart("image2.jpeg", "image/jpeg"),
//   ];

//   const result = await model.generateContent([prompt, ...imageParts]);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();