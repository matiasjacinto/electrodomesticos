var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

router.get("/", function (req, res, next) {
  res.render("contacto", {
    isContacto: true,
  });
});
module.exports = router;

router.post("/", async function (req, res, next) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.comentarios;

  var obj = {
    to: "electrodomesticos@gmail.com",
    subject: "contacto desde la pagina electrodomesticos",
    html:
      nombre +
      ` se contacto desde la web y quiere saber mas informacion, su correo es: ` +
      email +
      `Su telefono de contacto es: ` +
      tel +
      `y su comentario es:  ` +
      mensaje,
  };
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  var info = await transport.sendMail(obj);
  res.render("contacto", {
    message: "mensaje enviado correctamente",
    isContacto: true,
  });
});
