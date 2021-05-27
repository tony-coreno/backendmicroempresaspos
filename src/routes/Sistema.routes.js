const {Router} = require('express');

const router = Router();

const SistemaCtrl  = require('../controllers/sistema/Sistema.Controlles');

router.post('/guardar', SistemaCtrl.cambiarTitulo );

router.put('/actualizar/:id', SistemaCtrl.actualizar);

router.get('/obtener/:id',SistemaCtrl.buscarTitulo);





module.exports = router