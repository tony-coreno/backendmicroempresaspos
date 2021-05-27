const SistemaCtrl={}

const Sistema = require('../../models/Sistema.model');

const jwt = require('jsonwebtoken');

//Controlador para cambiar el titulo por sesion

SistemaCtrl.cambiarTitulo = async (req, res)=>{
    const {nombre, jefe} = req.body
    const NuevoTitulo = new Sistema({
        nombre, jefe
    })
    const token= jwt.sign({_id:NuevoTitulo._id},('secreta'))
    await NuevoTitulo.save()
    res.json({
        mensaje:'Titulo guardado',
        id: NuevoTitulo._id,
        nombre: NuevoTitulo.nombre,
        token
    })
}

//Actualizar el título del Sistema.
SistemaCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Sistema.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Sistema actualizado" });
  };


//Obtener el título del sistema
  SistemaCtrl.buscarTitulo = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Sistema.find({_id:id})
    res.json(respuesta)
  };


module.exports = SistemaCtrl;