const ProveedoresCtrl = {};
const Proveedor = require("../../models/Proveedores.model");
const jwt = require("jsonwebtoken");

ProveedoresCtrl.crearProveedor = async (req, res) => {
  const {
    nombre,
    apellido,
    categoriaproveedor,
    marcaproveedor,
    codigoproveedor,
    telefono,
    fecharegistro,
    correo,
    perfil,
    jefe,
  } = req.body;
  const NuevoProveedor = new Proveedor({
    nombre,
    apellido,
    categoriaproveedor,
    marcaproveedor,
    codigoproveedor,
    telefono,
    fecharegistro,
    correo,
    perfil,
    jefe,
  });
  const codigoDeProveedor = await Proveedor.findOne({
    codigoproveedor: codigoproveedor,
  });
  if (codigoDeProveedor) {
    res.json({
      mensaje: "El código proveedor ya fue asignado",
    });
  } else {
    const token = jwt.sign({ _id: NuevoProveedor._id }, "proveedor");
    await NuevoProveedor.save();
    res.json({
      mensaje: "Proveedor registrado",
      id: NuevoProveedor._id,
      nombre: NuevoProveedor.nombre,
      codigoproveedor: NuevoProveedor.codigoproveedor,
      token,
    });
  }
};


// Proveedores creados por una sesión administrativa
ProveedoresCtrl.proveedoresDeAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Cliente.find({jefe:id})
    res.json(respuesta)
  }


module.exports = ProveedoresCtrl;
