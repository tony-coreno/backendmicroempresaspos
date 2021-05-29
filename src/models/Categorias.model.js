const mongoose = require('mongoose');
const {Schema} = mongoose;
const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        default: "",
    },
    estado:{
        type: Boolean,
        default: true,
      },
    jefe:{
        type: String,
        required: [true, 'Es necesario un administrador']
    }
})

module.exports = mongoose.model('categoria', CategoriaSchema);