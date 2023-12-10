const mongoose = require("mongoose");

const UserTaggedDataSchema = new mongoose.Schema({
  TaggedLink: {
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

const UserTaggedData = mongoose.model("UserTaggedData", UserTaggedDataSchema);

module.exports = {
  UserTaggedData,
};
