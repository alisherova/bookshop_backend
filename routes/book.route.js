import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { requireRole } from "../middlewares/roleMiddleware.js";
import {
  getAll,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
} from "../controllers/books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAll);
booksRouter.get("/:id", getOneBook);
booksRouter.post("/", verifyToken, requireRole("admin"), createBook);
booksRouter.delete("/:id", verifyToken, requireRole("admin"), deleteBook);
booksRouter.put("/:id", verifyToken, requireRole("admin"), updateBook);

export default booksRouter;
