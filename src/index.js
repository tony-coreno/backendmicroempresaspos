const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database');
//Puerto
app.set('Port', 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

//Ruta de administrador

app.use('/administrador', require('./routes/Administrador.route'))

//Ruta empleados

app.use('/empleados', require('./routes/Empleado.route'))


//Ruta productos

app.use('/productos',require('./routes/Producto.route'))

//Ruta Sistema

app.use('/sistema', require('./routes/Sistema.routes'))

//Ruta clientes

app.use('/clientes', require('./routes/Clientes.route'))

//Ruta Proveedores

app.use('/proveedores', require('./routes/Proveedores.route'))

app.use('/ventas', require('./routes/Ventas.route'))

 app.listen(app.get('Port'),()=>{
     console.log('Servidor esuchando el puerto', app.get('Port'))
 })
