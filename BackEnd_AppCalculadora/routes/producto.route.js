const express = require ('express');
const router = express.Router();
// Definicion de controlador para manejo de CRUD
const producto = require('../controllers/producto.controller');
// Definicion de rutas
router.get('/', producto.getProductos);
router.post('/', producto.createProducto);
router.get('/:id', producto.getProducto);
router.put('/:id', producto.editProducto);
router.delete('/:id', producto.deleteProducto);
// Exportando modulo de rutas
module.exports = router;