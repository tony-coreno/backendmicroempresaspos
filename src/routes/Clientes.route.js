const {Router} = require('express');
const router = Router()
const ClienteCtrl = require('../controllers/clients/Clientes.controllers');

//Ruta para crear cliente

router.post('/crear',ClienteCtrl.crearCliente);

//Ruta listar clientes por un administrador 

router.get('/listarporadmin/:id', ClienteCtrl.clientesDeUnAdmin);

//buscar cliente por ID

router.get('/buscar/:id',ClienteCtrl.buscarCliente);

//Actualizar clientes

router.put('/actualizar/:id',ClienteCtrl.actualizar);

//Eliminar cliente

router.delete('/eliminar/:id', ClienteCtrl.eliminar);

router.get('/buscar/:nombre/:id', ClienteCtrl.buscarClienteID);

module.exports = router;


