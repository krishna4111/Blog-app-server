import express from "express";
import userRoutes from "../features/users/router.js";

const router = express.Router();

router.post("/user", userRoutes);

export default router;
