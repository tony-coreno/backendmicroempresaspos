const AuthEmpleados = {}

const jwt = require('jsonwebtoken')

AuthEmpleados.verificartokenEmpleados = (req, res, next)=>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }
    const token = req.headers.autorizacion
    if(token ==='null'){
        return res.json({
            mensaje: 'No estas autorizado'
        })
    }
    jwt.verify(token, 'empleado', (error, resultado)=>{
        if(error) return res.json({
            mensaje: 'No estas autorizado'
        })
        next()
    })

}

module.exports = AuthEmpleados;