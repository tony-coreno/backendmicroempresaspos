const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagosSchema = new Schema({
    pagos:{
        type: Array,
        default: ["","Efectivo","Tarjeta","Vale despensa"]
    },
    jefe:{
        type: String,
        required: [true, "Autorización de un admin es necesario"]
    }
});

module.exports = mongoose.model('pago', PagosSchema);