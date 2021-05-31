const { Router } = require('express');
const router = Router()
const ProductoCtrl = require('../controllers/productos/Productos.controllers');
const Auth = require('../helpers/Auth')
//Ruta para agregar el producto (POST)

router.post('/agregar',Auth.verificartoken, ProductoCtrl.agregarProducto);


router.get('/listarporadmin/:id', ProductoCtrl.productosAdmin);

router.get('/listarporadmin/:jefe', ProductoCtrl.productosAdminEmpleado);

//Enviar a carrito
router.get('/carrito/:sku', ProductoCtrl.productoACarrito);

//Eliminar

router.delete('/eliminar/:id',ProductoCtrl.eliminar)

//Buscar producto por nombre y ID de admin correspondiente

router.get('/buscar/:producto/:id',Auth.verificartoken, ProductoCtrl.buscarProducto);

//Actualizar Proveedor
router.put('/actualizar/:id', ProductoCtrl.actualizar);

router.get('/buscar/:id', ProductoCtrl.buscarProd);

module.exports = router;
