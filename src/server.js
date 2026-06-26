import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDb from "./config/db.config.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());

(() => {
  console.log("it is triggered");
  connectToDb();
})();

app.get("/", (req, res) => {
  res.send("Blog app is running ");
});

app.use((req, res, next) => {
  console.log("entered the server ====>", req.url);
  next();
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
