const express = require("express");
const loginRouter = express.Router();

function router(nav) {
  
  loginRouter.get("/", function (req, res) {
    res.render("login", {
      nav,
      title: "My Library",
    });
  });
  loginRouter.get("/gokul/1234", function (req, res) {
    res.write("THIS is hacked");
    res.end();
  });

  return loginRouter;
}

module.exports = router;