const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  photo: {
    default:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&uid=R81634057&ga=GA1.1.169643648.1700283915&semt=ais",
    type: "String",
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const UserData = mongoose.model("UserData", UserDataSchema);

module.exports = {
  UserData,
};
