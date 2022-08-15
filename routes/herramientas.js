var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("herramientas", {
    inHerramientas: true,
  });
});
module.exports = router;
