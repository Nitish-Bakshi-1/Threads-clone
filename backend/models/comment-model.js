import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    text: {
      type: String,
    },
  },
  { timeStamps: true }
);

const Comment = mongoose.model("comment", commentSchema);
export default Comment;
