const {Router} = require('express');

const router = Router();

const CategoriasCtrl  = require('../controllers/productos/Categorias.controller');

router.post('/guardar', CategoriasCtrl.agregar );

router.put('/actualizar/:id', CategoriasCtrl.actualizar);

router.get('/obtener/:id',CategoriasCtrl.buscarCategorias);

module.exports = router;