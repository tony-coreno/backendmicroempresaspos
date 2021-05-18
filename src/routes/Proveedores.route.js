const {Router} = require('express');
const router = Router()
const ProveedoresCtrl = require('../controllers/proveedores/Proveedores.controllers');

//Ruta para crear proveedor

router.post('/crear',ProveedoresCtrl.crearProveedor);

//Ruta listar clientes por un administrador 

router.get('/proveedorporadmin/:id',ProveedoresCtrl.proveedoresDeAdmin);

//Buscar proveedor info
router.get('/buscar/:id',ProveedoresCtrl.buscarProveedor);

//Actualizar Proveedor
router.put('/actualizar/:id', ProveedoresCtrl.actualizar);

//Eliminar Proveedor
router.delete('/eliminar/:id', ProveedoresCtrl.eliminar);

module.exports = router;