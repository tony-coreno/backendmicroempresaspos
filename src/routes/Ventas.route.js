const {Router} = require('express');
const router = Router()
const CrearVentaCtrl = require('../controllers/ventas/CrearVenta.controllers');


//Controlador para Nueva venta
router.post('/crearventa', CrearVentaCtrl.nuevaVenta);

module.exports = router;
