const express = require("express");
const userTaggedControllers = require("../controllers/userTaggedControllers");
const userTaggedRouter = express.Router();

userTaggedRouter.post("/", userTaggedControllers.createTagData);
userTaggedRouter.get("/", userTaggedControllers.getAllTagsData);
userTaggedRouter.get("/:id", userTaggedControllers.getTagData);
userTaggedRouter.put("/:id", userTaggedControllers.updateTagData);
userTaggedRouter.delete("/:id", userTaggedControllers.deleteTagData);

module.exports = userTaggedRouter;
