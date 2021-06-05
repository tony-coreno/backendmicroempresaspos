const UnidadesCtrl={}

const Unidad = require('../../models/Unidades.model');

const jwt = require('jsonwebtoken');

//Controlador para cambiar el titulo por sesion

UnidadesCtrl.agregar = async (req, res)=>{
    const {nombre, jefe, estado} = req.body
    const NuevaUnidad = new Unidad({
        nombre, jefe, estado
    })
    const token= jwt.sign({_id:NuevaUnidad._id},('secreta'))
    await NuevaUnidad.save()
    res.json({
        mensaje:'Unidad guardada',
        id: NuevaUnidad._id,
        nombre: NuevaUnidad.nombre,
        estado: NuevaUnidad.estado,
        token
    })
}

//Actualizar Las unidades
UnidadesCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Unidad.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Unidad actualizada" });
  };


//Obtener unidades del sistema
  UnidadesCtrl.buscarUnidad = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Unidad.find({jefe:id})
    res.json(respuesta)
  };

//Unidades Eliminar

UnidadesCtrl.eliminar = async(req, res)=>{
  const id = req.params.id
  await Unidad.findByIdAndRemove({_id:id})
  res.json({
    mensaje: "Unidad eliminada"
})
}

//Coincidencia Categoría

UnidadesCtrl.coincidenciaUnidad = async(req, res)=>{
  const {nombre, id} = req.params
  const respuesta = await Unidad.find({nombre: {$regex: ".*"+nombre+".*"},jefe:id})
  res.json(respuesta)
}

module.exports = UnidadesCtrl;