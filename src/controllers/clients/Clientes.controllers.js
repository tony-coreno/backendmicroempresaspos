const ClienteCtrl = {};
const Cliente = require("../../models/Clientes.model");
const jwt = require("jsonwebtoken");

//Crear cliente
ClienteCtrl.crearCliente = async (req, res) => {
  const {
    nombre,
    apellido,
    tipocliente,
    codigopromocional,
    telefono,
    fecharegistro,
    correo,
    perfil,
    jefe,
  } = req.body;
  const NuevoCliente = new Cliente({
    nombre,
    apellido,
    tipocliente,
    codigopromocional,
    telefono,
    fecharegistro,
    correo,
    perfil,
    jefe,
  });
  const codigoPromocionalCliente = await Cliente.findOne({
    codigopromocional: codigopromocional,
  });
  if (codigoPromocionalCliente) {
    res.json({
      mensaje: "El codigo promocional ya ha sido asignado",
    });
  } else {
    // NuevoCliente
    const token = jwt.sign({ _id: NuevoCliente._id }, "cliente");
    await NuevoCliente.save();
    res.json({
      mensaje: "Cliente registrado",
      id: NuevoCliente._id,
      nombre: NuevoCliente.nombre,
      codigopromocional: NuevoCliente.codigopromocional,
      token,
    });
  }
};

// Clientes creados por una sesión administrativa
ClienteCtrl.clientesDeUnAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Cliente.find({jefe:id})
    res.json(respuesta)
  }

module.exports = ClienteCtrl;