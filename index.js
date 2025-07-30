
const express = require('express');

const db = require('./db');

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

const menuRoutes = require('./routes/menuRoutes');

app.use('/menu/',menuRoutes);

// comment added for testing purpose

app.listen(PORT);

