import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    await mongoose.connect(mongoUrl);
    console.log("Mongodb connected successfully!");
  } catch (error) {
    console.error("Error when connect to Mongodb", error);
  }
};

export default connectToDb;
