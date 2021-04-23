const mongoose = require("mongoose");
const { Schema } = mongoose;
const ClienteSchema = new Schema({
  nombre: String,
  apellido: String,
  tipocliente: String,
  codigopromocional: String,
  telefono: Number,
  fecharegistro: Date,
  correo: String,
  perfil: String,
  jefe:String,
  comprascliente: [
    {
      fechacompra: Date,
      importe: Number,
      articulos: {},
    },
  ],
});

module.exports = mongoose.model("clientes", ClienteSchema);
