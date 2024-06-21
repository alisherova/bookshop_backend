import handleErrorResponse from "../errors/errorHandler.js";
import {
  createNewBook,
  getAllBooks,
  getBookById,
  deleteBookById,
  updateBookById,
} from "../services/books.js";

export const getAll = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const getOneBook = async (req, res) => {
  try {
    const selectedBook = await getBookById(req.params.id);
    res.json(selectedBook);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const createBook = async (req, res) => {
  const data = req.body;
  try {
    const newBook = await createNewBook(data);
    res.status(201).json({ message: "created successfully", newBook });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      res.status(400).json({ error: errors });
    } else handleErrorResponse(res, err);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await deleteBookById(req.params.id);
    return res
      .status(200)
      .json({ message: "deleted successfully", deletedBook });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedBook = await updateBookById(id, data);
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({
      message: "Updated successfully",
      updatedBook,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ error: errors });
    } else {
      handleErrorResponse(res, error); // Use the correct variable
    }
  }
};
