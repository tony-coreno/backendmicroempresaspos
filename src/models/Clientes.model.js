const mongoose = require('mongoose')
const { Schema } = mongoose
const ClienteSchema = new Schema ({
    nombre: String,
    apellido: String,
    usuario: String,
    contrasena: String,
    negocio: String,
    fecharegistro: Date,
    perfil: String

})

module.exports = mongoose.model('administrador',ClienteSchema)
