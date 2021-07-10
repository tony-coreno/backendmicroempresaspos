const {Router} = require('express');
const router = Router()
const CrearVentaCtrl = require('../controllers/ventas/CrearVenta.controllers');


//Controlador para Nueva venta
router.post('/crearventa', CrearVentaCtrl.nuevaVenta);

//Controlador ventas del día

router.get('/ventasdia/:id', CrearVentaCtrl.ventasDia);

//Controlador ventas del día por empleado

router.get('/empleado/:usuario', CrearVentaCtrl.ventasDiaEmpleado);

router.get('/buscar/:idcompra', CrearVentaCtrl.localizarVenta);

module.exports = router;

