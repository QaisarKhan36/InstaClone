const express = require("express");
const userPersonalDataControllers = require("../controllers/userPersonalDataControllers");
const PersonalDataRouter = express.Router();

PersonalDataRouter.post("/", userPersonalDataControllers.createPersonalData);
PersonalDataRouter.get("/", userPersonalDataControllers.getPersonalData);
PersonalDataRouter.put("/:id", userPersonalDataControllers.updatePersonalData);
PersonalDataRouter.delete(
  "/:id",
  userPersonalDataControllers.deletePersonalData
);

module.exports = PersonalDataRouter;
