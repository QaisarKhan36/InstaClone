const mongoose = require("mongoose");

const UserHighlightDataSchema = new mongoose.Schema({
  higlightLink: {
    type: "String",
    required: true,
  },
  higlightTagline: {
    type: "String",
    default: "highlights",
  },
  type: {
    type: "String",
  },
  id: {
    type: Number,
    unique:true,
    required: true,
  },
});

const UserHighlightData = mongoose.model(
  "UserHighlightData",
  UserHighlightDataSchema
);

module.exports = {
  UserHighlightData,
};
