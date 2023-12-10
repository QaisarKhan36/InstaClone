const express = require("express");
const registerDataControllers = require("../controllers/registerDataControllers");
const registerDataRouter = express.Router();

registerDataRouter.post("/", registerDataControllers.registerData);
registerDataRouter.get("/", registerDataControllers.getAllRegisteredData);
registerDataRouter.get("/:id", registerDataControllers.getRegisteredData);
registerDataRouter.put("/:id", registerDataControllers.updateRegisteredData);
registerDataRouter.delete("/:id", registerDataControllers.deleteRegisteredData);

module.exports = registerDataRouter;
