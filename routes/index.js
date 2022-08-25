var express = require("express");
var router = express.Router();
var ofertasModels = require("../models/ofertasModels");
/* GET home page. */
router.get("/", async function (req, res, next) {
  var ofertas = await ofertasModels.getOfertas();
  res.render("index", {
    isHome: true,
    ofertas,
  });
});

module.exports = router;
