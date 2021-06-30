const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProveedorSchema = new Schema({
  nombre:{
    type: String,
    required: [true, 'Nombre es obligatorio']
  },
  apellido:{
    type:String,
    required: [true, 'Es necesario un apellido']
  },
  categoriaproveedor:{
    type: String,
    required: [true, 'Es necesario asignar una categoría']
  },
  marcaproveedor:{
    type:String
  },
  telefono:{
    type: Number,
  },
  fecharegistro:{
    type: Date,
    default: Date()
  },
  correo:{
    type: String,
    default: "notiene@notiene.com"
  },
  jefe:{
    type: String,
    required: [true, 'Es necesario la validación de un administrador']
  },
  fecha:{
    type: Number,
    default: Date.now()
  },
  imagen:{
    type: String,
    default: "https://img.icons8.com/color/96/000000/salesman.png"
  }
  
});

module.exports = mongoose.model("proveedores", ProveedorSchema);
