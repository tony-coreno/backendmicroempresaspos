const mongoose = require('mongoose')
const { Schema } = mongoose
const AdministradorSchema = new Schema ({
    nombre: String,
    apellidopaterno: String,
    apellidomaterno: String,
    usuario: String,
    contrasena: String,
    negocio: String,
    fecharegistro: Date,
    perfil: String

})

module.exports = mongoose.model('administrador',AdministradorSchema)
