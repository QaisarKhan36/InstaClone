const mongoose = require("mongoose");

const UserPersonalDataSchema = new mongoose.Schema({
  userName: {
    type: "String",
    required: true,
  },
  postCount: {
    default: 0,
    type: Number,
    required: true,
  },
  followersCount: {
    default: 0,
    type: Number,
    required: true,
  },
  followingCount: {
    default: 0,
    type: Number,
  },
  name: {
    type: "String",
    required: true,
  },
  Bio: {
    type: "String",
  },
});

const UserPersonalData = mongoose.model(
  "UserPersonalData",
  UserPersonalDataSchema
);

module.exports = {
  UserPersonalData,
};
