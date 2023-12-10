const { UserTaggedData } = require("../model/userTaggedDataModel");

const createTagData = (req, res) => {
  try {
    const { TaggedLink, likesCount, commentCount, id, type } = req.body;
    const newTagged = new UserTaggedData({
      TaggedLink,
      likesCount,
      commentCount,
      type,
      id,
    });
    newTagged.save();
    res.status(201).json({ message: "Tag Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllTagsData = async (req, res) => {
  try {
    const Tags = await UserTaggedData.find().exec();
    res.status(200).json(Tags);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getTagData = async (req, res) => {
  try {
    const UserTagged = await UserTaggedData.findById(req.params.id);
    if (UserTagged) {
      res.json(UserTagged);
    } else {
      res.json({ message: "Tag not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateTagData = async (req, res) => {
  const { TaggedLink, likesCount, commentCount, type, id } = req.body;
  try {
    const UserTagged = await UserTaggedData.findById(req.params.id);
    if (UserTagged) {
      UserTagged.set({
        TaggedLink: TaggedLink ?? UserTagged.TaggedLink,
        likesCount: likesCount ?? UserTagged.likesCount,
        commentCount: commentCount ?? UserTagged.commentCount,
        type: type ?? UserTagged.type,
        id: id ?? UserTagged.id,
      });
      UserTagged.save();
      res.status(200).json({ message: "Tag updated successfully", UserTagged });
    } else {
      res.json({ message: "Tag not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteTagData = async (req, res) => {
  const result = await UserTaggedData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "Tag deleted successfully" });
  } else {
    res.status(404).json({ message: "Tag not found" });
  }
};

module.exports = {
  createTagData,
  getTagData,
  updateTagData,
  deleteTagData,
  getAllTagsData,
};
