import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import booksRouter from "./routes/book.route.js";
import userRouter from "./routes/auth.route.js";
import {} from "dotenv/config";

const app = express();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const corsOptions = {
  origin: "https://alisherova.github.io",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use("/books", booksRouter, cors(corsOptions));
app.use("/auth", userRouter, cors(corsOptions));

app.get("/api", (req, res) => {
  res.status(201).json({ message: "App is running" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
