
const AdministradorImgCtrl = {};
const Administrador = require("../models/AdministradorImagen.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');


//Opciones de multer
const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination : (req, file, callback) => {         // Solicitud nombre del fichero (file) callback = next
            callback(null, __dirname+'../../../frontend/public/uploads/profile')
        },
        filename : (req, res, callback) => {
            callback(null, file);
        }


    })    
}
const upload = multer(configuracionMulter).single('imagen')


AdministradorCtrl.subirImagen = async(req, res, next) => {
    upload(req, res, (error)=>{
        if(error instanceof multer.MulterError){
            return next();

        }
    });
    next();

}
