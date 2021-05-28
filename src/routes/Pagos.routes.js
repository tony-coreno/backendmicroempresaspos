const {Router} = require('express');
const router = Router()
const PagosCtrl = require('../controllers/sistema/Pagos.Controllers');

//Ruta para crear cliente

router.post('/crear',PagosCtrl.crearPagos);

//Ruta listar clientes por un administrador 

router.get('/pagoadmin/:id', PagosCtrl.pagosDeUnAdmin);

//Ruta actualizar pagos desde el frontend

router.put('/actualizar/:id', PagosCtrl.actualizar);

//Ruta eliminar pagos desde el front

router.delete('/eliminar/:id', PagosCtrl.eliminar)

module.exports = router;

