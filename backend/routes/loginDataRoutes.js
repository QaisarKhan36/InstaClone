const express = require("express");
const loginDataControllers = require("../controllers/loginDataControllers");
const loginDataRouter = express.Router();

loginDataRouter.post("/", loginDataControllers.loginData);
// loginDataRouter.get("/", loginDataControllers.getAllloginData);
// loginDataRouter.get("/:id", loginDataControllers.getloginData);
// loginDataRouter.put("/:id", loginDataControllers.updateloginData);
// loginDataRouter.delete("/:id", loginDataControllers.deleteloginData);

module.exports = loginDataRouter;
