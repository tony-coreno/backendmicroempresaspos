const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductoSchema = new Schema({
    sku: String,
    producto:String,
    existencia:Number,
    precioventa:Number,
    marca: String,
    categoria:String,
    unidad:String,
    estado:String,
    talla:String,
    jefe:String


})


module.exports = mongoose.model('productos', ProductoSchema);