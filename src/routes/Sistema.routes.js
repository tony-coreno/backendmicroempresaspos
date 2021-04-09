const {Router} = require('express');

const router = Router()

const SistemaCtrl  = require('../controllers/sistema/Sistema.Controlles')

router.post('/guardar', SistemaCtrl.cambiarTitulo );





module.exports = router