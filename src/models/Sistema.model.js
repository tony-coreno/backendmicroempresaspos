const mongoose = require('mongoose');
const {Schema} = mongoose;
const SistemaSchema = new Schema({
    nombre: String,
    jefe: String
})

module.exports = mongoose.model('sistema', SistemaSchema);