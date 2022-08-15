var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("notbook_movil", {
    isNotbook_movil: true,
  });
});
module.exports = router;
