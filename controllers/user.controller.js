import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { getAllUsers } from "../services/users.js";
import handleErrorResponse from "../errors/errorHandler.js";

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { login, password, role } = req.body;
    const user = new User({ login, password, role });
    await user.save();
    res.status(201).json({ user, message: "User registered successfully" });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (!user || (await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      "your-secret-key",
      {
        expiresIn: "3d",
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
