import express from "express";
import { signUpUser } from "./controller.js";

const router = express.Router();

router.post("/sign-up", signUpUser);

export default router;
