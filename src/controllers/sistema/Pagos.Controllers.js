const PagosCtrl = {};
const Pagos = require("../../models/Pagos.model");
const jwt = require("jsonwebtoken");

//Crear métodos de pagos

PagosCtrl.crearPagos = async (req, res) => {
    const {
        pagos,
        jefe
    } = req.body;
    const NuevoPago = new Pagos({
        pagos,
        jefe
    })
    const token = jwt.sign({_id: NuevoPago._id}, 'secreta');
    await NuevoPago.save();
    res.json({
        mensaje: "Pagos agregados",
        pagos : NuevoPago.pagos,
        token
    })
}

//Actualizar pagos desde el frontend 

PagosCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Producto.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Producto actualizado" });
  };


// Pagos creados por una cada administrador

PagosCtrl.pagosDeUnAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Cliente.find({jefe:id})
    res.json(respuesta)
  }


module.exports = PagosCtrl;