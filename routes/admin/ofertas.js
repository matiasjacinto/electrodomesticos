var express = require("express");
var router = express.Router();
var ofertasModel = require("../../models/ofertasModels");

router.get("/", async function (req, res, next) {
  var ofertas = await ofertasModel.getOfertas();
  res.render("admin/ofertas", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    ofertas,
  });
});

module.exports = router;
