const moongose = require('mongoose');
const {Schema} = moongose;
const CrearVentaSchema = new Schema({
    usuario: String,
    fechaventa:Date,
    jefe:String,
    subtotal:Number,
    total:Number,
    metodopago:String
    

})

module.exports = moongose.model('crearventa', CrearVentaSchema);

