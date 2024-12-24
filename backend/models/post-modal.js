import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timeStamps: true }
);

const Post = mongoose.model("post", postSchema);
export default Post;
