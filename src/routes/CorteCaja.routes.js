const {Router} = require('express');

const router = Router();

const CorteCajaCtrl  = require('../controllers/ventas/CorteCaja.controllers');

router.post('/guardar', CorteCajaCtrl.guardar );

module.exports = router