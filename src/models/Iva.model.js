const mongoose = require('mongoose');
const {Schema} = mongoose;
const IvaSchema = new Schema({
    estado: {
        type: Boolean,
        default: false,
    },
    jefe:{
        type: String,
        required: [true, 'Es necesario un administrador']
    }
})

module.exports = mongoose.model('impuesto', IvaSchema);