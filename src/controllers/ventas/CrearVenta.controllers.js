const CrearVentaCtrl = {};
const CrearVenta = require("../../models/CrearVenta.model");

CrearVentaCtrl.nuevaVenta = async (req, res) => {
  const {
    idusuario,
    usuario,
    fechaventa,
    jefe,
    subtotal,
    total,
    metodopago,
    tipocliente,
    descuentoaplicado,
    idcompra,
    idticket,
    articulos
  } = req.body
  const Venta = new CrearVenta({
    idusuario,
    usuario,
    fechaventa,
    jefe,
    subtotal,
    total,
    metodopago,
    tipocliente,
    descuentoaplicado,
    idcompra,
    idticket,
    articulos,
  })
  await Venta.save()
  res.json({
      mensaje: 'Venta exitosa',
      id:Venta._id,
      total:Venta.total
  })
};

CrearVentaCtrl.ventasDia = async (req, res)=>{
  const id = req.params.id
  const respuesta = await CrearVenta.find({jefe:id})
  res.json(respuesta)
}


module.exports = CrearVentaCtrl;
