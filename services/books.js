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

export const updateBookById = async (id, data) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }); 
    return updatedBook;
  } catch (error) {
    throw error;
  }
};
