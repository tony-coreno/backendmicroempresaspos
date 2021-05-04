const {Router} = require('express');
const router = Router()
const CrearVentaCtrl = require('../controllers/ventas/CrearVenta.controllers');


//Controlador para Nueva venta
router.post('/crearventa', CrearVentaCtrl.nuevaVenta);

//Controlador ventas del día

router.get('/ventasdia/:fecha', CrearVentaCtrl.ventasDia);


module.exports = router;

