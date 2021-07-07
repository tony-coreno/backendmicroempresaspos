const IvaCtrl = {};
const Iva = require("../../models/Iva.model");

//Controlador para reportar el problema

IvaCtrl.guardarIva = async (req, res) => {
  const { estado, jefe } = req.body;
  const NuevoIva = new Iva({
    estado,
    jefe,
  });
  await NuevoIva.save();
  res.json({
    mensaje: "IVA guardado",
    id: NuevoIva._id,
    estado: NuevoIva.estado,
    jefe: NuevoIva.jefe,
  });
};


IvaCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Iva.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Iva actualizado" });
  };
  
//Obtener el título del sistema
  IvaCtrl.buscarIva = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Iva.find({jefe:id})
    res.json(respuesta)
  };


module.exports = IvaCtrl;
