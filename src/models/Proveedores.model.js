const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProveedorSchema = new Schema({
  nombre: String,
  apellido: String,
  categoriaproveedor: String,
  marcaproveedor: String,
  codigoproveedor: String,
  telefono: Number,
  fecharegistro: Date,
  correo: String,
  perfil: String,
  jefe:String,
});

module.exports = mongoose.model("proveedores", ProveedorSchema);
