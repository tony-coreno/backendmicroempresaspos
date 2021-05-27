const mongoose = require('mongoose');
const {Schema} = mongoose;
const SistemaSchema = new Schema({
    nombre: {
        type: String,
        default: "Sistema POS",
    },
    jefe:{
        type: String,
        required: [true, 'Es necesario un administrador']
    }
})

module.exports = mongoose.model('sistema', SistemaSchema);