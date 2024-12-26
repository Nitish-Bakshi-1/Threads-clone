import User from "../models/user-model.js";
import Post from "../models/post-model.js";
import Comment from "../models/comment-model.js";

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!id) {
      return res.status(400).json({
        msg: "id is required",
      });
    }
    if (!text) {
      return res
        .json({
          msg: "no comment is added",
        })
        .status(400);
    }
    const postExists = await Post.findById(id);
    if (!postExists) {
      return res
        .json({
          msg: "no such post",
        })
        .status(400);
    }
    const comment = new Comment({
      text,
      admin: req.user._id,
      post: postExists._id,
    });
    const newComment = await comment.save();
    await Post.findByIdAndUpdate(
      id,
      {
        $push: { comments: newComment._id },
      },
      { new: true }
    );
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: { replies: newComment._id },
      },
      { new: true }
    );
    res.status(201).json({
      msg: "commented !",
    });
  } catch (err) {
    res.status(400).json({
      msg: "error in add comment0",
      err: err.message,
    });
  }
};
