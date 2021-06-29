const mongoose = require("mongoose");
const { Schema } = mongoose;
const EmpleadoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Es necesario un nombre"],
  },
  apellidopaterno: {
    type: String,
    required: [true, "Es necesario ingresar apellido paterno"],
  },
  apellidomaterno: {
    type: String,
    required: [true, "Es necesario apellido materno"],
  },
  numeroempleado: {
    type: String,
  },
  usuario: {
    type: String,
    required: [true, "Es necesario un usuario para ingresar al sistema"],
  },
  contrasena: {
    type: String,
    required: [true, "Ingrese una contraseña"],
  },
  perfil: {
    type: String,
    required: [true, "Ingrese rol o perfil"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  jefe: {
    type: String,
    required: [true, "Registre con un administrador valido"],
  },
  imagen: {
    type: String,
    default: "https://img.icons8.com/plasticine/100/000000/total-sales.png",
  },
  fecharegistro: {
    type: Number,
  },
});

module.exports = mongoose.model("empleados", EmpleadoSchema);
