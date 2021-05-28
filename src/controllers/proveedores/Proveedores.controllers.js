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
    const respuesta = await Proveedor.find({jefe:id})
    res.json(respuesta)
  }

  ProveedoresCtrl.buscarProveedor = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Proveedor.find({_id:id})
    res.json(respuesta)
  }


  ProveedoresCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Proveedor.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Proveedor actualizado" });
  };

  ProveedoresCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
    await Proveedor.findByIdAndRemove({_id:id})
    res.json({
      mensaje: 'Proveedor Eliminado'
    })
  }
  //Controlador para buscar por nombre empleado similar consulta LIKE

ProveedoresCtrl.buscarProveedorID = async (req, res) => {
  const { nombre, id } = req.params;
  const respuesta = await Proveedor.find({
    nombre: { $regex: ".*" + nombre + ".*" },
    jefe: id,
  });
  res.json(respuesta);
};
  
module.exports = ProveedoresCtrl;
