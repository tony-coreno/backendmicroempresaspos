const {Router} = require('express');

const router = Router();

const UnidadesCtrl  = require('../controllers/productos/Unidades.controllers');

router.post('/guardar', UnidadesCtrl.agregar );

router.put('/actualizar/:id', UnidadesCtrl.actualizar);

router.get('/obtener/:id',UnidadesCtrl.buscarUnidad);

router.delete('/eliminar/:id', UnidadesCtrl.eliminar);

router.get('/buscar/:nombre/:id', UnidadesCtrl.coincidenciaUnidad);

module.exports = router;