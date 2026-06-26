import bcrypt from "bcrypt";
import User from "../../models/user.model.js";
import { errorHandler } from "../../../utils/error.js";

export const signUpUser = async (req, res, next) => {
  console.log("Entered signup function");
  try {
    const { username, email, password } = req.body;

    if ((!username, !email, !password)) {
      //TODO: We calls the custom error handler
      next(errorHandler(400, "All Fields are required"));
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already present try with signin",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User signup successfully!!!",
      data: user,
    });
  } catch (error) {
    next();
  }
};
