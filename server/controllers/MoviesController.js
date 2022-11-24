const {getAllMovies, create, update, remove} = require('../models/MovieModels.js');

const getMovies = (req, res) => {
  getAllMovies((err, movies) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(movies);
    }
  });
};

const post = (req, res) => {
  create(req.body, (err, movies) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(movies);
    }
  });
};

const patch = (req, res) => {
  update(req.body, (err, movies) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(204).send(movies);
    }
  });
};

const extract = (req, res) => {
  remove(req.body, (err, movies) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(202).send(movies);
    }
  });
};

module.exports = {
  getMovies,
  post,
  patch,
  extract
}