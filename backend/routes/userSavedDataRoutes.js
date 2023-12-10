const express = require("express");
const userSavedDataControllers = require("../controllers/userSavedDataControllers");
const SavedDataRouter = express.Router();

SavedDataRouter.post("/", userSavedDataControllers.createSavedData);
SavedDataRouter.get("/", userSavedDataControllers.getAllSavedData);
SavedDataRouter.get("/:id", userSavedDataControllers.getSavedData);
SavedDataRouter.put("/:id", userSavedDataControllers.updateSavedData);
SavedDataRouter.delete("/:id", userSavedDataControllers.deleteSavedData);

module.exports = SavedDataRouter;
