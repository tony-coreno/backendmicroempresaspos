const {Router} = require('express');
const router = Router()
const ProveedoresCtrl = require('../controllers/proveedores/Proveedores.controllers');


//Ruta para crear proveedor

router.post('/crear',ProveedoresCtrl.crearProveedor);

//Ruta listar clientes por un administrador 

router.get('/proveedorporadmin/:id',ProveedoresCtrl.proveedoresDeAdmin);

router.get('/buscar/:id',ProveedoresCtrl.buscarProveedor);

module.exports = router;