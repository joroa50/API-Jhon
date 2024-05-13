//Vamos a exportar las librerias//
const express = require("express");
const router = express.Router();

// Se importan los controladores//
const usuariosController = require("../controllers/usuariosControllers");

//Se configuran los endpoints//
router.get('/', usuariosController.getUsuarios);
router.get('/:id', usuariosController.getUsuariosById);
router.post('/', usuariosController.crearUsuario);
router.put('/:id',usuariosController.actualizarUsuario);
router.delete('/',usuariosController.eliminarUsuario);

module.exports = router;