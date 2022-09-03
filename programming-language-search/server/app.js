import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const LANGUAGES = [
  "Javascript",
  "java",
  "typescript",
  "php",
  "Asp",
  "Jsp",
  "React",
  "Python",
  "nodejs",
  "AnelScript",
  "CobolScript",
  "json",
  "jsonjava",
];

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/languages", (req, res) => {
  const { keyword } = req.query;
  const data = LANGUAGES.filter((language) =>
    language.toLowerCase().includes(keyword)
  );

  res.send(data);
});

export default app;
