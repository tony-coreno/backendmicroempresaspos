const {Router} = require('express');
const router = Router()
const ClienteCtrl = require('../controllers/clients/Clientes.controllers');

//Ruta para crear cliente

router.post('/crear',ClienteCtrl.crearCliente);

//Ruta listar clientes por un administrador 

router.get('/listarporadmin/:id', ClienteCtrl.clientesDeUnAdmin);

module.exports = router;


