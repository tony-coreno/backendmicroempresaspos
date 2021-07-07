const mongoose = require('mongoose');
const {Schema} = mongoose;
const ReportarProblemaSchema = new Schema({
    problema: {
        type: String,
        required: [true, 'Es necesario describir el problema']
    },
    usuario:{
        type: String,
        required: [true, 'Es necesaria una sesión válida']
    },
    jefe:{
        type: String,
        required: [true, 'Es necesario un administrador']
    },
    fecha:{
        type: Date,
        default: Date()
    },
    fecharegistro: {
        type: Number,
        default: Date.now(),
    }
})

module.exports = mongoose.model('reportarproblema', ReportarProblemaSchema);