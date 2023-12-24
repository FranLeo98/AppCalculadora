const express = require ('express');
const router = express.Router();
// Definicion de controlador para manejo de CRUD
const plan = require('../controllers/plan.controller');
// Definicion de rutas
router.get('/', plan.getPlanes);
router.post('/', plan.createPlan);
router.get('/:id', plan.getPlan);
router.put('/:id', plan.editPlan);
router.delete('/:id', plan.deletePlan);
// Exportando modulo de rutas
module.exports = router;