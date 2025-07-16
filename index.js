
const express = require('express');

const db = require('./db');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

const menuRoutes = require('./routes/menuRoutes');

app.use('/menu/',menuRoutes);

// comment added for testing purpose
app.listen(8080);
