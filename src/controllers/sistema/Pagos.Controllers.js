const PagosCtrl = {};
const Pagos = require("../../models/Pagos.model");
const jwt = require("jsonwebtoken");

//Crear métodos de pagos

PagosCtrl.crearPagos = async (req, res) => {
    const {
        nombre,
        jefe,
        estado
    } = req.body;
    const NuevoPago = new Pagos({
        nombre,
        jefe,
        estado
    })
    const token = jwt.sign({_id: NuevoPago._id}, 'secreta');
    await NuevoPago.save();
    res.json({
        mensaje: "Pago agregado",
        nombre : NuevoPago.nombre,
        jefe : NuevoPago.jefe,
        estado : NuevoPago.estado,
        token
    })
}

//Actualizar pagos desde el frontend 

PagosCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Pagos.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Pago actualizado" });
  };

// Pagos creados por una cada administrador

PagosCtrl.pagosDeUnAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Pagos.find({jefe:id})
    res.json(respuesta)
  };

//Eliminar pago

PagosCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
    await Pagos.findByIdAndRemove({_id:id})
    res.json({
      mensaje: 'Producto Eliminado'
    })
  }
  
module.exports = PagosCtrl;