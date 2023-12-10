const mongoose = require("mongoose");

const PostDataSchema = new mongoose.Schema({
  time: {
    type: "String",
    required: true,
  },
  postphoto: {
    type: "String",
  },
  description: {
    type: "String",
  },
  likeCount: {
    type: Number,
  },
  commentCount: {
    type: Number,
  },
  name: {
    type: "String",
    required: true,
  },
  photo: {
    type: "String",
    required: true,
  },
  Type: {
    type: "String",
  },
  postid: {
    type: Number,
  },
});

const PostData = mongoose.model("PostData", PostDataSchema);

module.exports = {
  PostData,
};
