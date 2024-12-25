import User from "../models/user-model.js";
import Post from "../models/post-model.js";
import Comment from "../models/comment-model.js";
import cloudinary from "../config/cloudinary.js";
import formidable from "formidable";

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
