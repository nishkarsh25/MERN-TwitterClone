import express from "express";
import { Login, Register, bookmark, follow, getMyProfile, getOtherUsers, logout, unfollow } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();



