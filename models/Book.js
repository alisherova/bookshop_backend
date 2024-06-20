import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: false },
  price: { type: Number, required: true, min: 0 },
});

const BookModel = mongoose.model("books", BookSchema);

export default BookModel;
