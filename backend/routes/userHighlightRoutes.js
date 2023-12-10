const express = require("express");
const highlightControllers = require("../controllers/userHighlightControllers");
const highlightRouter = express.Router();

highlightRouter.post("/", highlightControllers.createHighlight);
highlightRouter.get("/", highlightControllers.getAllHightlight);
highlightRouter.get("/:id", highlightControllers.getHighlight);
highlightRouter.put("/:id", highlightControllers.updateHighlight);
highlightRouter.delete("/:id", highlightControllers.deleteHighlight);

module.exports = highlightRouter;
