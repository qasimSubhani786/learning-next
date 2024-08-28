import mongoose, { Schema } from "mongoose";

const realtimesocketSchema = new Schema(
  {
    name: String,
    language: String,
    version: String,
    bio: String,
    id: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const realtimesocket =
  mongoose.models.realtimesocket ||
  mongoose.model("realtimesocket", realtimesocketSchema);

export default realtimesocket;
