const AdministradorCtrl = {};
const Administrador = require("../models/Administrador.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Se crea el controlador para crear administrador

AdministradorCtrl.crearAdmin = async (req, res) => {
  const {
    nombre,
    apellidopaterno,
    apellidomaterno,
    usuario,
    contrasena,
    negocio,
    fecharegistro,
    fecha,
    perfil,
    imagen
  } = req.body
  
  const NuevoAdministrador = new Administrador({
      nombre,apellidopaterno,apellidomaterno,usuario,contrasena,negocio,fecharegistro,perfil,fecha,imagen
  })
  const usuarioadmin = await Administrador.findOne({usuario:usuario})
  if(usuarioadmin){
      res.json({
          mensaje: 'Usuario ya existe'
      })
  }else{
      NuevoAdministrador.contrasena = await bcrypt.hash(contrasena, 10)
      const token = jwt.sign({_id:NuevoAdministrador._id}, 'secreta')
      await NuevoAdministrador.save()
      res.json({
          mensaje: 'Bienvenido',
          id: NuevoAdministrador._id,
          nombre: NuevoAdministrador.nombre,
          negocio: NuevoAdministrador.negocio,
          perfil: NuevoAdministrador.perfil,
          token
      })
  }
}

AdministradorCtrl.login = async (req, res)=>{
    const { usuario, contrasena } = req.body
    const administrador = await Administrador.findOne({usuario:usuario})
    if(!administrador){
        return res.json({
            mensaje: 'Usuario incorrecto'
        })
    }
    //Se valida la contraseña de la BD
    const match = await bcrypt.compare(contrasena, administrador.contrasena)

    if(match){
        const token = jwt.sign({_id:administrador._id}, 'secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: administrador._id,
            nombre: administrador.nombre,
            negocio:administrador.negocio,
            perfil: administrador.perfil,
            imagen: administrador.imagen,
            token
        })
    }else{
        res.json({
            mensaje: 'Contrasena Incorrecta'
        })
    }

}

AdministradorCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Administrador.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Admin actualizado" });
  };
  


module.exports = AdministradorCtrl;