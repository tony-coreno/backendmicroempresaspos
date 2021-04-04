const Auth = {}

const jwt = require('jsonwebtoken')

Auth.verificartoken = (req, res, next)=>{
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
    jwt.verify(token, 'secreta', (error, resultado)=>{
        if(error) return res.json({
            mensaje: 'No estas autorizado'
        })
        next()
    })

}

module.exports = Auth;