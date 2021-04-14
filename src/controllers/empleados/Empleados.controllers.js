const EmpleadoCtrl = {}
const Empleado = require("../../models/Empleados.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Controlador empleado

EmpleadoCtrl.crearEmpleado = async (req, res) => {
  const {
    nombre,
    apellidopaterno,
    apellidomaterno,
    numeroempleado,
    usuario,
    contrasena,
    perfil,
    estado,
    jefe,
  } = req.body;
  const NuevoEmpleado = new Empleado({
    nombre,
    apellidopaterno,
    apellidomaterno,
    numeroempleado,
    usuario,
    contrasena,
    perfil,
    estado,
    jefe,
  })
  const numempleado = await Empleado.findOne({numeroempleado:numeroempleado})
  if(numempleado){
      res.json({
          mensaje: 'El numero de empleado ya existe'
      })
  }
  else{
      NuevoEmpleado.contrasena = await bcrypt.hash(contrasena, 10)
      const token = jwt.sign({_id:NuevoEmpleado._id}, 'empleado')
      await NuevoEmpleado.save()
      res.json({
          mensaje: 'Bienvenido',
          id: NuevoEmpleado._id,
          nombre: NuevoEmpleado.nombre,
          token
      })
  }
}

//Controlador para listar todos los empleados
EmpleadoCtrl.listar = async(req, res) =>{
  const respuesta = await Empleado.find()
  res.json(respuesta)
}

//Controlador para listar por ID

EmpleadoCtrl.listarid = async(req, res) => {
  const id = req.params.id
  const respuesta = await Empleado.findById({_id:id})
  res.json(respuesta)
}

//Empleados creado por una sesión administrativa
EmpleadoCtrl.empleadosDeUnAdmin = async (req, res)=>{
  const id = req.params.id
  const respuesta = await Empleado.find({jefe:id})
  res.json(respuesta)
}

//Controlador eliminar empleado

EmpleadoCtrl.eliminar = async(req, res)=>{
  const id = req.params.id
  await Empleado.findByIdAndRemove({_id:id})
  res.json({
    mensaje: 'Empleado Eliminado'
  })
}

//Controlador actualizar empleado

EmpleadoCtrl.actualizar = async(req, res)=>{
  const id = req.params.id
  await Empleado.findByIdAndUpdate({_id:id}, req.body)
  res.json({mensaje: 'Empleado actualizado'})
}

//Controlador para buscar por nombre empleado similar consulta LIKE

EmpleadoCtrl.buscarEmpleado = async(req, res)=>{
  const {nombre, id} = req.params
  const respuesta = await Empleado.find({nombre: {$regex: ".*"+nombre+".*"},jefe:id})
  res.json(respuesta)
}

EmpleadoCtrl.login = async (req, res)=>{
  const { usuario, contrasena } = req.body
  const empleado = await Empleado.findOne({usuario:usuario})
  if(!empleado){
      return res.json({
          mensaje: 'Usuario incorrecto'
      })
  }
  //Se valida la contraseña de la BD
  const match = await bcrypt.compare(contrasena, empleado.contrasena)

  if(match){
      const token = jwt.sign({_id:empleado._id}, 'empleado')
      res.json({
          mensaje: 'Bienvenido',
          id: empleado._id,
          nombre: empleado.nombre,
          negocio:empleado.negocio,
          perfil:empleado.perfil,
          token
      })
  }else{
      res.json({
          mensaje: 'Contrasena Incorrecta'
      })
  }

}


module.exports = EmpleadoCtrl