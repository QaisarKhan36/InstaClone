const mongoose = require("mongoose");

const UserPostDataSchema = new mongoose.Schema({
  postLink: {
    type: "String",
    required: true,
  },
  likesCount: {
    type: Number,
    required: true,
  },
  commentCount: {
    type: Number,
    required: true,
  },
  type: {
    type: "String",
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const UserPostData = mongoose.model("UserPostData", UserPostDataSchema);

module.exports = {
  UserPostData,
};
