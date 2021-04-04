const mongoose = require('mongoose')
const { Schema } = mongoose
const EmpleadoSchema = new Schema ({
    nombre: String,
    apellidopaterno: String,
    apellidomaterno: String,
    numeroempleado: String,
    usuario: String,
    contrasena: String,
    perfil: String,
    estado: String,
    jefe: String

})

module.exports = mongoose.model('empleados', EmpleadoSchema);
