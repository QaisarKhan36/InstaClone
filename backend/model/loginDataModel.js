const mongoose = require("mongoose");

const loginDataSchema = new mongoose.Schema({
  contactInfo: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

const LoginData = mongoose.model("LoginData", loginDataSchema);

module.exports = {
  LoginData,
};
