import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: false },
  price: { type: Number, required: true, min: 0 },
  img: { type: String, trim: true, required: false },
  category: { type: String, trim: true, required: false },
  pdflink: { type: String, trim: true, required: false },
  infolink: { type: String, trim: true, required: false },
});

const BookModel = mongoose.model("books", BookSchema);

export default BookModel;
