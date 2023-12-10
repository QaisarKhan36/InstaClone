const { PostData } = require("../model/postDataModel");

const createPostData = (req, res) => {
  try {
    const {
      time,
      postid,
      postphoto,
      description,
      likeCount,
      commentCount,
      name,
      photo,
      Type,
    } = req.body;
    const newPostData = new PostData({
      time,
      postphoto,
      description,
      likeCount,
      commentCount,
      name,
      photo,
      Type,
      postid,
    });
    newPostData.save();
    res.status(201).json({ message: "PostData Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllPostData = async (req, res) => {
  try {
    const posts = await PostData.find().exec();
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getPostData = async (req, res) => {
  try {
    const postData = await PostData.findById(req.params.id);
    if (postData) {
      res.json(postData);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updatePostData = async (req, res) => {
  const {
    time,
    postphoto,
    name,
    description,
    likeCount,
    photo,
    Type,
    postid,
    commentCount,
  } = req.body;
  try {
    const postData = await PostData.findById(req.params.id);
    if (postData) {
      postData.set({
        time: time ?? postData.time,
        postphoto: postphoto ?? postData.postphoto,
        name: name ?? postData.name,
        description: description ?? postData.description,
        likeCount: likeCount ?? postData.likeCount,
        photo: photo ?? postData.photo,
        Type: Type ?? postData.Type,
        commentCount: commentCount ?? postData.commentCount,
        postid: postid ?? postData.postid,
      });
      postData.save();
      res.status(200).json({ message: "post updated successfully", postData });
    } else {
      res.json({ message: "post not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deletePostData = async (req, res) => {
  const result = await PostData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "post deleted successfully" });
  } else {
    res.status(404).json({ message: "post not found" });
  }
};

module.exports = {
  createPostData,
  getPostData,
  getAllPostData,
  updatePostData,
  deletePostData,
};
