const pool = require("./bd");
var poll = require("./bd");

async function getOfertas() {
  var query = "select * from ofertas";
  var rows = await pool.query(query);
  return rows;
}

async function insertOferta(obj) {
  try {
    var query = "insert into ofertas set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteOfertaById(id) {
  var query = "delete from ofertas where id=?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getOfertasById(id) {
  var query = "select * from ofertas where id=?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}
async function modificarOfertaById(obj, id) {
  try {
    var query = "update ofertas set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getOfertas,
  insertOferta,
  deleteOfertaById,
  getOfertasById,
  modificarOfertaById,
};
