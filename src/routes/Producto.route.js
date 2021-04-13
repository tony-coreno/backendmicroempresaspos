const { Router } = require('express');
const router = Router()
const ProductoCtrl = require('../controllers/productos/Productos.controllers');
const Auth = require('../helpers/Auth')
//Ruta para agregar el producto (POST)

router.post('/agregar', ProductoCtrl.agregarProducto);


router.get('/listarporadmin/:id', ProductoCtrl.productosAdmin);


//Enviar a carrito
router.get('/carrito/:id', ProductoCtrl.productoACarrito);

//Eliminar

router.delete('/eliminar/:id',ProductoCtrl.eliminar)

//Buscar producto por nombre y ID de admin correspondiente

router.get('/buscar/:producto/:id',Auth.verificartoken, ProductoCtrl.buscarProducto)

module.exports = router;
