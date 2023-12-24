const express = require('express');
const router = express.Router();
// Controlador del CRUD
const compania = require ('../controllers/compania.controller');
// Definicion de Rutas
router.get('/', compania.getCompanias);
router.post('/', compania.createCompania);
router.get('/:id', compania.getCompania);
router.put('/:id', compania.editCompania);
router.delete('/:id', compania.deleteCompania);
// Exportacion de modulo de rutas
module.exports = router;