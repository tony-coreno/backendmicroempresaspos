const moongose = require('mongoose');
const {Schema} = moongose;
// let f = new Date();
const CrearVentaSchema = new Schema({

    idusuario:{
        type: String,
    },
    usuario:{
        type: String,
        default: "Tony"
    },
    fechaventa:{
        type: Date,
    },
    fecha:{
        type: Number
    },
    jefe:{
        type: String,
        required: [true, 'Es necesario un  jefe válido']
    },
    subtotal:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        required: [true, 'Es necesario total para marcar venta']
    },
    metodopago:{
        type: String,
        default: "Efectivo"
    },
    tipocliente:{
        type: String,
        default: "Minorista"
    },
    descuentoaplicado:{
        type: Boolean,
        default: false
    },
    idcompra:{
        type: String
    },
    idticket:{
        type: String
    },
    articulos: {
        type: Array
    }
    // articulos: {
    //     numarticulos: Number,
    //     sku: Number,
    //     producto: String,
    //     marca: String,
    //     cantidad:String,    
    // }
})
module.exports = moongose.model('crearventa', CrearVentaSchema);

