const express = require("express");
const addBookRouter = express.Router();

function router(nav) {
  addBookRouter.get("/", function (req, res) {
    res.render("addBook", {
      nav,
      title: "My Library",
    });
  });

  return addBookRouter;
}

module.exports = router;