const mongoose = require('mongoose')
const { Schema } = mongoose;
let f  = new Date();
const AdministradorSchema = new Schema ({
    nombre:{
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    apellidopaterno:{
        type: String,
        required: [true, 'El apellido paterno es obligatorio']
    },

    apellidomaterno:{
        type: String,
        required: [true, 'El apellido materno es obligatorio']
    },  
    usuario:{
        type: String,
        required: [true, 'El usuario es obligatorio']

    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    negocio:{
        type: String,
        default: "Abarrotes"
    },
    fecharegistro:{
        type: Date,
        default: `${f}`
    },
    perfil:{
        type: String,
        default: "Administrador"
    }

})

module.exports = mongoose.model('administrador',AdministradorSchema)
