const { UserPostData } = require("../model/userPostDataModel");

const createUserPost = (req, res) => {
  try {
    const { postLink, likesCount, commentCount, id, type } = req.body;
    const newPost = new UserPostData({
      postLink,
      likesCount,
      commentCount,
      type,
      id,
    });
    newPost.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllUsersPost = async (req, res) => {
  try {
    const users = await UserPostData.find().exec();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getUserPost = async (req, res) => {
  try {
    const userPost = await UserPostData.findById(req.params.id);
    if (userPost) {
      res.json(userPost);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateUserPost = async (req, res) => {
  const { postLink, likesCount, commentCount, type, id } = req.body;
  try {
    const userPost = await UserPostData.findById(req.params.id);
    if (userPost) {
      userPost.set({
        postLink: postLink ?? userPost.postLink,
        likesCount: likesCount ?? userPost.likesCount,
        commentCount: commentCount ?? userPost.commentCount,
        type: type ?? userPost.type,
        id: id ?? userPost.id,
      });
      userPost.save();
      res.status(200).json({ message: "user updated successfully", userPost });
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteUserPost = async (req, res) => {
  const result = await UserPostData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "user deleted successfully" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

module.exports = {
  createUserPost,
  getUserPost,
  updateUserPost,
  deleteUserPost,
  getAllUsersPost,
};
