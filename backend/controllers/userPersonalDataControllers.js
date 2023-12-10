const { UserPersonalData } = require("../model/userPersonalDataModel");

const createPersonalData = (req, res) => {
  try {
    const { userName, postCount, followersCount, followingCount, name, Bio } =
      req.body;
    const newPersonalData = new UserPersonalData({
      userName,
      postCount,
      followersCount,
      followingCount,
      name,
      Bio,
    });
    newPersonalData.save();
    res.status(201).json({ message: "PersonalData Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getPersonalData = async (req, res) => {
  try {
    const PersonalData = await UserPersonalData.find().exec();
    res.status(200).json(PersonalData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updatePersonalData = async (req, res) => {
  const { userName, postCount, followersCount, followingCount, Bio } = req.body;
  try {
    const userPersonalData = await UserPersonalData.findById(req.params.id);
    if (userPersonalData) {
      userPersonalData.set({
        userName: userName ?? userPersonalData.userName,
        postCount: postCount ?? userPersonalData.postCount,
        followersCount: followersCount ?? userPersonalData.followersCount,
        followingCount: followingCount ?? userPersonalData.followingCount,
        Bio: Bio ?? userPersonalData.Bio,
      });
      userPersonalData.save();
      res.status(200).json({
        message: "PersonalData updated successfully",
        userPersonalData,
      });
    } else {
      res.json({ message: "PersonalData not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deletePersonalData = async (req, res) => {
  const result = await UserPersonalData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "PersonalData deleted successfully" });
  } else {
    res.status(404).json({ message: "PersonalData not found" });
  }
};

module.exports = {
  createPersonalData,
  getPersonalData,
  updatePersonalData,
  deletePersonalData,
};
