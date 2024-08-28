import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    let response = await mongoose.connect(process.env.MONGODB_URI!);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error in connecting DB", error);
  }
};

export default connectMongoDB;
