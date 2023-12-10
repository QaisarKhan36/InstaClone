const express = require("express");
const userPostControllers = require("../controllers/userPostControllers");
const userPostRouter = express.Router();

userPostRouter.post("/", userPostControllers.createUserPost);
userPostRouter.get("/", userPostControllers.getAllUsersPost);
userPostRouter.get("/:id", userPostControllers.getUserPost);
userPostRouter.put("/:id", userPostControllers.updateUserPost);
userPostRouter.delete("/:id", userPostControllers.deleteUserPost);

module.exports = userPostRouter;
