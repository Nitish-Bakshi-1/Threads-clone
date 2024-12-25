import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: { type: String },
    profilePic: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/3870/3870822.png",
    },
    public_id: {
      type: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    repost: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
export default User;
