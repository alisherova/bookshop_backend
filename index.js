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
app.use(
  cors({
    origin: "https://alisherova.github.io/book-shop/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);

app.options("*", cors());
app.use("/books", booksRouter, cors());
app.use("/auth", userRouter, cors());

app.get("/api", (req, res) => {
  res.status(201).json({ message: "App is running" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
