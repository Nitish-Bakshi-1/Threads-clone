import User from "../models/user-model.js";
import Post from "../models/post-model.js";
import Comment from "../models/comment-model.js";
import mongoose from "mongoose";

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

export const deleteComment = async (req, res) => {
  try {
    const { postId, id } = req.params;
    if (!posted || !id) {
      return res.status(400).json({ msg: "error in delete comment" });
    }
    const postExists = await Post.findById(postId);
    if (!postExists) {
      return res.status(400).json({ msg: "no such post !" });
    }
    const commentExists = await Comment.findById(id);
    if (!commentExists) {
      return res.status(400).json({ msg: "no such comment !" });
    }
    const newId = mongoose.schema.Types.ObjectId(id);
    if (postExists.comments.includes(newId)) {
      const id1 = commentExists.admin._id.toString();
      const id2 = req.user._id.toString();
      if (id1 !== id2) {
        return res.status(400).json({
          msg: "u r not authorized to delete the comment",
        });
      }
      await Post.findByIdAndUpdate(
        postId,
        { $pull: { comments: id } },
        { new: true }
      );
      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { replies: id } },
        { new: true }
      );
      await Comment.findByIdAndDelete(id);
      return res.status(201).json({
        msg: "comment deleted",
      });
    }
    res.status(200).json({
      msg: "This post doesnot include the comment !",
    });
  } catch (err) {
    res.status(400).json({
      msg: "error in deleteComment",
      err: err.message,
    });
  }
};
