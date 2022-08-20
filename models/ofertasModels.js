const pool = require("./bd");
var poll = require("./bd");

async function getOfertas() {
  var query = "select * from ofertas";
  var rows = await pool.query(query);
  return rows;
}

module.exports = { getOfertas };
