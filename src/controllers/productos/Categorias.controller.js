const CategoriasCtrl={}

const Categoria = require('../../models/Categorias.model');

const jwt = require('jsonwebtoken');

//Controlador para cambiar el titulo por sesion

CategoriasCtrl.agregar = async (req, res)=>{
    const {nombre, jefe, estado} = req.body
    const NuevaCategoria = new Categoria({
        nombre, jefe, estado
    })
    const token= jwt.sign({_id:NuevaCategoria._id},('secreta'))
    await NuevaCategoria.save()
    res.json({
        mensaje:'Categoria guardada',
        id: NuevaCategoria._id,
        nombre: NuevaCategoria.nombre,
        estado: NuevaCategoria.estado,
        token
    })
}

//Actualizar Las categorias
CategoriasCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Categoria.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Categoria actualizada" });
  };


//Obtener el título del sistema
  CategoriasCtrl.buscarCategorias = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Categoria.find({jefe:id})
    res.json(respuesta)
  };

//Categorias Eliminar

CategoriasCtrl.eliminar = async(req, res)=>{
  const id = req.params.id
  await Categoria.findByIdAndRemove({_id:id})
  res.json({
    mensaje: "Categoria eliminada"
})
}

//Coincidencia Categoría

CategoriasCtrl.coincidenciaCategoria = async(req, res)=>{
  const {nombre, id} = req.params
  const respuesta = await Categoria.find({nombre: {$regex: ".*"+nombre+".*"},jefe:id})
  res.json(respuesta)
}

module.exports = CategoriasCtrl;