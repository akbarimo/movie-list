const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});