const { UserSavedData } = require("../model/userSavedDataModel");

const createSavedData = (req, res) => {
  try {
    const { collectionLink, CollectionName, type, id } = req.body;
    const newSaved = new UserSavedData({
      collectionLink,
      CollectionName,
      id,
    });
    newSaved.save();
    res.status(201).json({ message: "Saved Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllSavedData = async (req, res) => {
  try {
    const Saved = await UserSavedData.find().exec();
    res.status(200).json(Saved);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getSavedData = async (req, res) => {
  try {
    const userSaved = await UserSavedData.findById(req.params.id);
    if (userSaved) {
      res.json(userSaved);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateSavedData = async (req, res) => {
  const { collectionLink, CollectionName, id } = req.body;
  try {
    const userSaved = await UserSavedData.findById(req.params.id);
    if (userSaved) {
      userSaved.set({
        collectionLink: collectionLink ?? userSaved.collectionLink,
        CollectionName: CollectionName ?? userSaved.CollectionName,
        id: id ?? userSaved.id,
      });
      userSaved.save();
      res
        .status(200)
        .json({ message: "Saved updated successfully", userSaved });
    } else {
      res.json({ message: "Saved not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteSavedData = async (req, res) => {
  const result = await UserSavedData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "Saved deleted successfully" });
  } else {
    res.status(404).json({ message: "Saved not found" });
  }
};

module.exports = {
  createSavedData,
  getSavedData,
  updateSavedData,
  deleteSavedData,
  getAllSavedData,
};
