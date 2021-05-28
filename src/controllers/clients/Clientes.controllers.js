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


//Buscar Cliente por ID
  ClienteCtrl.buscarCliente = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Cliente.find({_id:id})
    res.json(respuesta)
  }

//Actualizar cliente por ID
  ClienteCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Cliente.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Cliente actualizado" });
  };

  //Delete customer by ID
  ClienteCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
    await Cliente.findByIdAndRemove({_id:id})
    res.json({
      mensaje: 'Cliente Eliminado'
    })
  }

//Controlador para buscar por nombre cliente similar consulta LIKE

ClienteCtrl.buscarClienteID = async (req, res) => {
  const { nombre, id } = req.params;
  const respuesta = await Cliente.find({
    nombre: { $regex: ".*" + nombre + ".*" },
    jefe: id,
  });
  res.json(respuesta);
};

module.exports = ClienteCtrl;