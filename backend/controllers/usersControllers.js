const { UserData } = require("../model/usersDataModel");

const createUser = (req, res) => {
  try {
    const { name, photo, id } = req.body;
    const newUser = new UserData({
      name,
      photo,
      id,
    });
    newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserData.find().exec();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const resData = await UserData.findById(req.params.id);
    if (resData) {
      res.json(resData);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateUser = async (req, res) => {
  const { name, photo, id } = req.body;
  try {
    const resData = await UserData.findById(req.params.id);
    if (resData) {
      resData.set({
        name: name ?? UserData.name,
        photo: photo ?? UserData.photo,
        id: id ?? UserData.id,
      });
      resData.save();
      res.status(200).json({ message: "user updated successfully", UserData });
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteUser = async (req, res) => {
  const result = await UserData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "user deleted successfully" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
