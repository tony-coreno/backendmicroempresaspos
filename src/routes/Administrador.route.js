const { Router } = require('express')
const router = Router()
const AdministradorCtrl = require('../controllers/Administrador.controllers')

//Ruta para registrarlo por POST

router.post('/crear', AdministradorCtrl.crearAdmin)


//Ruta Login

router.post('/login', AdministradorCtrl.login)

module.exports = router