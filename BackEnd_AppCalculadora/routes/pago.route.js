const express = require ('express');
const router = express.Router();
// Definicion de controlador para manejo de CRUD
const pago = require('../controllers/pago.controller');
// Definicion de rutas
router.get('/', pago.getPagos);
router.post('/', pago.createPago);
router.get('/:id', pago.getPago);
router.put('/:id', pago.editPago);
router.delete('/:id', pago.deletePago);
// Exportando modulo de rutas
module.exports = router;