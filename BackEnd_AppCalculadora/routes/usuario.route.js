const express = require ('express');
const router = express.Router();
// Definicion de controlador para manejo de CRUD
const usuario = require('../controllers/usuario.controller');
// Definicion de rutas
router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);
// Exportando modulo de rutas
module.exports = router;