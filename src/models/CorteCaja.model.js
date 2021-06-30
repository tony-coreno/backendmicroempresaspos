const mongoose = require('mongoose');
const {Schema} = mongoose;
const CorteSchema = new Schema({
    cantidad: {
        type: Number,
        required: [true, 'Es necesario un importe para guardarlo']
    },
    usuario:{
        type:String,
        required: [true, 'Es necesaria una firma de usuario válida']
    },
    jefe:{
        type: String,
        required: [true, 'Es necesario un administrador']
    },
    fecha:{
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model('cortecaja', CorteSchema);