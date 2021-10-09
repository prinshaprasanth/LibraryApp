const express = require("express");
const mainRouter = express.Router();

function router(nav) {
  mainRouter.get("/", function (req, res) {
    res.render("index", {
      nav,
      title: "My Library",
    });
  });

  return mainRouter;
}

module.exports = router;