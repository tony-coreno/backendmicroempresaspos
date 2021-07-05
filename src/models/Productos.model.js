const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductoSchema = new Schema({

    sku: {
        type: String,
        required: [true, 'El código de barra es obligatorio']
    },
    producto: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio']
    },
    existencia: {
        type: Number,
        required: [true, 'Es necesario saber cuántos hay']
    },
    precioventa: {
        type: Number,
        required: [true, 'Es necesario el precio']
    },
    marca :{
        type: String,
        required: [true, 'Es necesaria la marca']
    },
    categoria: {
        type: String,
        required: [true, 'Es necesaria una categoria válida']
    },
    cantidad: {
        type: Number,
        required: [true, 'Es necesaria una cantidad del producto']
    },
    unidad: {
        type: String,
        required: [true, 'Ingresa una unidad']
    },
    estado: {
        type: Boolean,
        default: true
    },
    jefe: {
        type: String,
        required: [true, 'Es necesario un administrador']
    },
    imagen:{
        type: String,
        default: "https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png"
    },
    fecha:{
        type: Number,
        default: Date.now()
    },
    fecharegistro:{
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model('producto', ProductoSchema);