const db = require('../db');

const getAllMovies = (callback) => {
  const q = `SELECT * from Movies;`

  db.query(q, callback);
};

const create = ({moviename}, callback) => {
  const q = `INSERT INTO Movies (moviename, watched) values ("${moviename}", false);`;

  db.query(q, callback);
};

const update = ({moviename}, callback) => {
  const q = `UPDATE Movies SET watched = true WHERE moviename = "${moviename}";`;

  db.query(q, callback);
};

const remove = ({moviename}, callback) => {
  const q = `DELETE FROM Movies WHERE moviename = "${moviename}";`;

  db.query(q, callback)
};


module.exports = {
  getAllMovies,
  create,
  update,
  remove
}