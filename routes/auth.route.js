import express from "express";
import {
  fetchAllUsers,
  registerUser,
  loginUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/users", fetchAllUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
