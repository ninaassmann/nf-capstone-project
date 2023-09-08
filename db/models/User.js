import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
