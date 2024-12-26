import User from "../models/user-model.js";
import Post from "../models/post-model.js";
import Comment from "../models/comment-model.js";
import cloudinary from "../config/cloudinary.js";
import formidable from "formidable";
import mongoose from "mongoose";

export const addPost = async (req, res) => {
  try {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.json({ msg: "error in form parse!" }).status(400);
      }
      const post = new Post();
      if (fields.text) {
        post.text = fields.text;
      }
      if (files.media) {
        const uploadedImage = await cloudinary.uploader.upload(
          files.media.filepath,
          { folder: "Threads_clone/Posts" }
        );
        if (!uploadedImage) {
          return res.status(400).json({
            msg: "error while uploading image!",
          });
        }
        post.media = uploadedImage.secure_url;
        post.public_id = uploadedImage.public_id;
      }
      post.admin = req.user._id;
      const newPost = await post.save();
      await User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { threads: newPost._id },
        },
        {
          new: true,
        }
      );
      res.status(201).json({
        msg: "post created",
        newPost,
      });
    });
  } catch (err) {
    res.json({ msg: "error in addPost", err: err.message }).status(400);
  }
};

export const allPost = async (req, res) => {
  try {
    const { page } = req.query;
    let pageNumber = page;
    if (!page || page === undefined) {
      pageNumber = 1;
    }
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * 3)
      .limit(3)
      .populate({ path: "likes", select: "-password" })
      .populate({ path: "admin", select: "-password" })
      .populate({
        path: "comments",
        populate: {
          path: "admin",
          model: "user",
        },
      });
    res.status(200).json({
      msg: "post fetched",
      posts,
    });
  } catch (err) {
    res.json({
      msg: "errors in AllPosts",
      err: err.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        msg: "Id is required",
      });
    }
    const postExists = await Post.findById(id);
    if (!postExists) {
      return res.status(400).json({
        msg: "post not found",
      });
    }
    const userId = req.user._id.toString();
    const adminId = postExists.admin._id.toString();
    if (userId !== adminId) {
      return res.status(400).json({
        msg: "you are not authorized to delete this post",
      });
    }
    if (postExists.media) {
      await cloudinary.uploader.destroy(postExists.public_id, (err, result) => {
        console.log({ err, result });
      });
    }
    await Comment.deleteMany({ _id: { $in: postExists.comments } });
    await User.updateMany(
      { $or: [{ threads: id }, { reposts: id }, { replies: id }] },
      {
        $pull: {
          threads: id,
          reposts: id,
          replies: id,
        },
      },
      {
        new: true,
      }
    );
    await Post.findByIdAndDelete(id);
    res.status(200).json({
      msg: "post deleted!",
    });
  } catch (err) {
    res
      .json({
        msg: "error in delete post",
        err: err.message,
      })
      .status(400);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .json({
          msg: "id is required",
        })
        .status(400);
    }
    const post = await Post.findById(id);
    if (!post) {
      res.json({
        msg: "no such post!",
      });
    }
    if (post.likes.includes(req.user._id)) {
      await Post.findByIdAndUpdate(
        id,
        { $pull: { likes: req.user._id } },
        { new: true }
      );

      return res
        .json({
          msg: "Post disliked",
        })
        .status(201);
    }

    await Post.findByIdAndUpdate(
      id,
      { $push: { likes: req.user._id } },
      { new: true }
    );

    res
      .json({
        msg: "Post liked",
      })
      .status(201);
  } catch (err) {
    res.status(400).json({
      msg: "error in likePost",
      err: err.message,
    });
  }
};

export const repost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res
        .json({
          msg: "id is needed",
        })
        .status(400);
    }
    const post = await Post.findById(id);
    if (!post) {
      return res.status(400).json({
        msg: "no such post!",
      });
    }
    const newId = new mongoose.Types.ObjectId(id);
    if (req.user.repost.includes(newId)) {
      return res.status(400).json({
        msg: "this post is already reposted !",
      });
    }
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { repost: post._id } },
      { new: true }
    );
    res.status(200).json({ msg: "reposted" });
  } catch (err) {
    res.json({
      msg: "error in repost !",
      err: err.message,
    });
  }
};
