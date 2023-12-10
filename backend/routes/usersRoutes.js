const express = require("express");
const UsersControllers = require("../controllers/usersControllers");
const UsersDataRouter = express.Router();

UsersDataRouter.post("/", UsersControllers.createUser);
UsersDataRouter.get("/", UsersControllers.getAllUsers);
UsersDataRouter.get("/:id", UsersControllers.getUser);
UsersDataRouter.put("/:id", UsersControllers.updateUser);
UsersDataRouter.delete("/:id", UsersControllers.deleteUser);

module.exports = UsersDataRouter;