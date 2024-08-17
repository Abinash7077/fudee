import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  mob: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true, // Fixed typo here
    trim: true,
    unique: true, // Ensuring email is unique
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

// Check if the model is already defined
const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;
