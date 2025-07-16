
const express = require('express');

const db = require('./db');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

const menuRoutes = require('./routes/menuRoutes');

app.use('/menu/',menuRoutes);


app.listen(8080);