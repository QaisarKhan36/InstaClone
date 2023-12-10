const mongoose = require("mongoose");

const registerDataSchema = new mongoose.Schema({
  contactInfo: {
    type: "String",
    required: true,
  },
  fullName: {
    type: "String",
    required: true,
  },
  userName: {
    type: "String",
    unique: true,
  },
  password: {
    type: "String",
    unique: true,
    required: true,
  },
});

const RegisterData = mongoose.model("RegisterData", registerDataSchema);

module.exports = {
  RegisterData,
};
