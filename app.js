// Imports
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const path = require('path');
require('dotenv').config();
const {sequelize} = require('./database');
require('ejs');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/reserva.routes'));


app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/tareas';
           }, 3000)           
        )();
        </script>
    </h1>`)
});



// Starting the server
app.listen(45635, () => console.log('Servidor corriendo en puerto 3000'));