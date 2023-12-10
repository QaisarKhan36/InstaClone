const mongoose = require("mongoose");

const UserSavedDataSchema = new mongoose.Schema({
  collectionLink: {
    type: "String",
    required: true,
  },
  collectionName: {
    default: "Collection",
    type: "String",
    required: true,
  },
  id: {
    type: Number,
    unique: true,
    required: true,
  },
});

const UserSavedData = mongoose.model("UserSavedData", UserSavedDataSchema);

module.exports = {
  UserSavedData,
};
