const moongose = require('mongoose');
const {Schema} = moongose;
const CrearVentaSchema = new Schema({
    idusuario:String,
    usuario: String,
    fechaventa:Date,
    jefe:String,
    subtotal:Number,
    total:Number,
    metodopago:String,
    tipocliente:String,
    descuentoaplicado:Boolean,
    idcompra:String,
    idticket:String,
    articulos: {
        numarticulos: Number,
        sku: Number,
        producto: String,
        marca: String,
        cantidad:String,    
    }
})
module.exports = moongose.model('crearventa', CrearVentaSchema);

