const { RegisterData } = require("../model/registerDataModel");
const bcrypt = require("bcrypt");

const registerData = async (req, res) => {
  try {
    const { contactInfo, fullName, password, userName } = req.body;

    // Check if user with the given contactInfo already exists
    const existingUser = await RegisterData.findOne({ contactInfo, userName });

    if (!existingUser) {
      const salt = await bcrypt.genSalt(12);
      const hashedpassword = await bcrypt.hash(password, salt);
      //data and salt arguments required

      const newRegisterData = new RegisterData({
        contactInfo,
        password: hashedpassword,
        fullName,
        userName,
      });

      await newRegisterData.save();
      res.status(201).json({ message: "Registered Successfully" });
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      // Handle Mongoose validation errors
      const errorMessage = Object.values(error.errors)
        .map((e) => e.message)
        .join(", ");
      res.status(400).json({ message: errorMessage });
    } else if (error.code === 11000) {
      res
        .status(400)
        .json({ message: "Duplicate key error. User already exists." });
    } else {
      // Other error
      res
        .status(500)
        .json({ message: "Internal System Error", error: error.message });
    }
  }
};

const getAllRegisteredData = async (req, res) => {
  try {
    const RegisterDatas = await RegisterData.find().exec();
    res.status(200).json(RegisterDatas);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getRegisteredData = async (req, res) => {
  try {
    const registerData = await RegisterData.findById(req.params.id);
    if (registerData) {
      res.json(registerData);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateRegisteredData = async (req, res) => {
  const { contactInfo, fullName, password, userName } = req.body;
  try {
    const registerData = await RegisterData.findById(req.params.id);
    if (registerData) {
      registerData.set({
        contactInfo: contactInfo ?? registerData.contactInfo,
        fullName: fullName ?? registerData.fullName,
        password: password ?? registerData.password,
        userName: userName ?? registerData.userName,
      });
      registerData.save();
      res
        .status(200)
        .json({ message: "registeredData updated successfully", registerData });
    } else {
      res.json({ message: "registeredData not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteRegisteredData = async (req, res) => {
  const result = await RegisterData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "registeredData deleted successfully" });
  } else {
    res.status(404).json({ message: "registeredData not found" });
  }
};

module.exports = {
  registerData,
  getAllRegisteredData,
  getRegisteredData,
  updateRegisteredData,
  deleteRegisteredData,
};
