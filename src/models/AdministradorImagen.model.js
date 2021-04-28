const mongoose = require('mongoose')
const { Schema } = mongoose
const AdministradorImagenSchema = new Schema ({
imagen: String,
jefe: String,
})

module.exports = mongoose.model('imagenadmin',AdministradorImagenSchema)
