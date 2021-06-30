const CorteCajaCtrl={}
const CorteCaja = require('../../models/CorteCaja.model');
// const jwt = require('jsonwebtoken');

//Controlador para almacenar el corte

CorteCajaCtrl.guardar = async (req, res)=>{
    const {fecha,jefe,cantidad,usuario} = req.body
    const NuevoCorte = new CorteCaja({
        fecha,jefe,cantidad,usuario
    })
    // const token= jwt.sign({_id:NuevoTitulo._id},('secreta'))
    await NuevoCorte.save()
    res.json({
        mensaje:'Corte guardado',
        id: NuevoCorte._id,
        usuario: NuevoCorte.usuario,
        fecha: NuevoCorte.fecha,
        cantidad: NuevoCorte.cantidad,
        jefe: NuevoCorte.cantidad,
    })
}


module.exports = CorteCajaCtrl;