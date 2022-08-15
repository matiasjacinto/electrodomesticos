var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();

var indexRouter = require("./routes/index");
var notbook_movilRouter = require("./routes/notbook_movil");
var electrodomesticosRouter = require("./routes/electrodomesticos");
var hogarRouter = require("./routes/hogar");
var herramientasRouter = require("./routes/herramientas");
var contactoRouter = require("./routes/contacto");
var loginRouter = require("./routes/admin/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/notbook_movil", notbook_movilRouter);
app.use("/electrodomesticos", electrodomesticosRouter);
app.use("/hogar", hogarRouter);
app.use("/herramientas", herramientasRouter);
app.use("/contacto", contactoRouter);
app.use("/admin/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
