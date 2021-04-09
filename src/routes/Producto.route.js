const { Router } = require('express');
const router = Router()
const ProductoCtrl = require('../controllers/productos/Productos.controllers');

//Ruta para agregar el producto (POST)

router.post('/agregar', ProductoCtrl.agregarProducto);


router.get('/listarporadmin/:id', ProductoCtrl.productosAdmin);


router.delete('/eliminar/:id',ProductoCtrl.eliminar)

module.exports = router;
