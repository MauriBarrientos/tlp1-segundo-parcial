// Imports
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const path = require('path');
require('dotenv').config();
const {sequelize} = require('./database');
require('ejs');

const port = process.env.PORT || 4000;

const app = express();
sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));


// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
// Routes
app.use(require('./routes/index.routes'));




// Starting the server
app.listen(4000, () => console.log('Servidor corriendo en puerto 4000'));