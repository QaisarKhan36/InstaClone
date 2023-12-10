const express = require("express");
const postDataControllers = require("../controllers/postDataControllers");
const postDataRouter = express.Router();

postDataRouter.post("/", postDataControllers.createPostData);
postDataRouter.get("/", postDataControllers.getAllPostData);
postDataRouter.get("/:id", postDataControllers.getPostData);
postDataRouter.put("/:id", postDataControllers.updatePostData);
postDataRouter.delete("/:id", postDataControllers.deletePostData);

module.exports = postDataRouter;