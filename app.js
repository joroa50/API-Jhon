/* Vamos a importar librerias */
const express = require("express");
const bodyParser = require("body-parser");
const Usuarios  = require("./bd/usuarioServices");

// Se importan los endpoints//
const UsuariosRoutes = require('./routes/usuariosRoutes')

const app = express();

// Se hace la middleware
app.use(bodyParser.json);

//Se establece el endpoint
app.use('/usuarios', UsuariosRoutes );

//Configuramos el servidor//
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando en " + port);
})

module.exports = app;