import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      
    },
    skills: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      maxlength: 500,
      default: "",
    },
    profileImage: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// TODO: Add password hashing middleware
// TODO: Add password comparison method

const User = mongoose.model("User", userSchema);

export default User;
