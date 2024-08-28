import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: String,
    email: String,
    salary: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
