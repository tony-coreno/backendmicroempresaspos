const mongoose = require("mongoose");
const { Schema } = mongoose;
const ClienteSchema = new Schema({
  nombre:{
    type: String,
    required: [true, 'Es necesario un nombre']
  },
  apellido:{
    type: String,
    required: [true, 'Ingrese apellido']
  },
  tipoCliente:{
    type: String,
    required: [true, 'Ingrese una categoría']
  },
  codigopromocional:{
    type:Number,
  },
  telefono:{
    type: Number
  },
  fecharegistro:{
    type: Date,
    default: Date()
  },
  correo:{
    type: String,
    default: "notiene@notiene.com"
  },
  perfil:{
    type: String
  },
  jefe: {
    type: String,
    required: [true, 'Es necesario un administrador']
  },
  comprascliente:{
    type: Array,
  },
  fecha:{
    type: Number,
    default: Date.now(),
  },
  imagen:{
    type: String,
    default: "https://img.icons8.com/color/96/000000/permanent-job.png"
  }
});

module.exports = mongoose.model("clientes", ClienteSchema);
