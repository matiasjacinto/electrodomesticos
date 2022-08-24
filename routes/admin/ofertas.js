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

router.get("/agregar", function (req, res, next) {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

router.post("/agregar", async function (req, res, next) {
  try {
    console.log(req.body);
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.cuerpo != ""
    ) {
      await ofertasModel.insertOferta(req.body);
      res.redirect("/admin/ofertas");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "no se cargo la oferta",
    });
  }
});
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await ofertasModel.deleteOfertaById(id);
  res.redirect("/admin/ofertas");
});

router.get("/modificar/:id", async (req, res, next) => {
  var id = req.params.id;
  var oferta = await ofertasModel.getOfertasById(id);
  res.render("admin/modificar", {
    layout: "admin/layout",
    oferta,
  });
});

router.post("/modificar", async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    };
    await ofertasModel.modificarOfertaById(obj, req.body.id);
    res.redirect("/admin/ofertas");
  } catch (error) {
    console.log(error);
    res.render("admin/modificar", {
      layout: "admin/layout",
      error: true,
      message: "No se modifico la oferta",
    });
  }
});

module.exports = router;
