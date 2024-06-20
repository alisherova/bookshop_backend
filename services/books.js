import BookModel from "../models/Book.js";

export const getAllBooks = async () => {
  try {
    return BookModel.find();
  } catch (err) {
    throw err;
  }
};

export const getBookById = async (bookId) => {
  try {
    return BookModel.findById({ _id: bookId });
  } catch (err) {
    throw err;
  }
};

export const createNewBook = async (bookData) => {
  try {
    const newBook = new BookModel(bookData);
    return newBook.save();
  } catch (err) {
    throw err;
  }
};

export const deleteBookById = async (bookId) => {
  try {
    return BookModel.deleteOne({ _id: bookId });
  } catch (err) {
    throw err;
  }
};

export const updateBookById = async (bookId, bookData) => {
  try {
    return BookModel.findOneAndUpdate(bookId, bookData);
  } catch (err) {
    throw err;
  }
};
