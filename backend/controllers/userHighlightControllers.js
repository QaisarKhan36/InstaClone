const { UserHighlightData } = require("../model/userHighlightDataModel");

const createHighlight = (req, res) => {
  try {
    const { higlightLink, higlightTagline, type, id } = req.body;
    const newHighlight = new UserHighlightData({
      higlightLink,
      higlightTagline,
      type,
      id,
    });
    newHighlight.save();
    res.status(201).json({ message: "Highlight Created Successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getAllHightlight = async (req, res) => {
  try {
    const highlights = await UserHighlightData.find().exec();
    res.status(200).json(highlights);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const getHighlight = async (req, res) => {
  try {
    const userHighlight = await UserHighlightData.findById(req.params.id);
    if (userHighlight) {
      res.json(userHighlight);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const updateHighlight = async (req, res) => {
  const { higlightLink, higlightTagline, type, id } = req.body;
  try {
    const userHighlight = await UserHighlightData.findById(req.params.id);
    if (userHighlight) {
      userHighlight.set({
        higlightLink: higlightLink ?? userHighlight.higlightLink,
        higlightTagline: higlightTagline ?? userHighlight.higlightTagline,
        type: type ?? userHighlight.type,
        id: id ?? userHighlight.id,
      });
      userHighlight.save();
      res
        .status(200)
        .json({ message: "highlight updated successfully", userHighlight });
    } else {
      res.json({ message: "highlight not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal System Error", err: err.message });
  }
};

const deleteHighlight = async (req, res) => {
  const result = await UserHighlightData.findById(req.params.id);
  if (result) {
    await result.deleteOne();
    res.status(200).json({ message: "highlight deleted successfully" });
  } else {
    res.status(404).json({ message: "highlight not found" });
  }
};

module.exports = {
  createHighlight,
  getHighlight,
  updateHighlight,
  deleteHighlight,
  getAllHightlight,
};
