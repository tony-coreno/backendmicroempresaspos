const {Router} = require('express')
const router = Router()
const EmpleadoCtrl = require('../controllers/empleados/Empleados.controllers')
//const AuthEmpleados = require('../helpers/Auth.Empleados')
const Auth = require('../helpers/Auth')
//Ruta

router.post('/crear',Auth.verificartoken, EmpleadoCtrl.crearEmpleado)

//Ruta obtener todos los empleados

router.get('/listarempleados', EmpleadoCtrl.listar)

//Ruta obtener empleados por ID

router.get('/listar/:id', EmpleadoCtrl.listarid)

//Ruta obtener empleados de unas sesión admin

router.get('/listarporadmin/:id', EmpleadoCtrl.empleadosDeUnAdmin)

//Ruta eliminar empleado

router.delete('/eliminar/:id', EmpleadoCtrl.eliminar)

//Ruta para actualizar

router.put('/actualizar/:id', EmpleadoCtrl.actualizar)

//Buscar por nombre de empleado

router.get('/buscar/:nombre/:id',Auth.verificartoken, EmpleadoCtrl.buscarEmpleado)

//Ruta login
router.post('/login', EmpleadoCtrl.login)

module.exports = router

