const ProductoCtrl = {}
const Producto = require('../../models/Productos.model');
const jwt = require('jsonwebtoken');

//Controlador agregar producto

ProductoCtrl.agregarProducto = async(req, res) => {
    const { sku,producto,existencia,precioventa,categoria,unidad,estado,jefe} = req.body
    const NuevoProducto = new Producto({
        sku,
        producto,
        existencia,
        precioventa,
        categoria,
        unidad,
        estado,
        jefe
    })
    const skuagregado = await Producto.findOne({sku:sku})
    if (skuagregado){
        res.json({
            mensaje: 'El producto ya ha sido registrado'
        })
    }else {
        const token = jwt.sign({_id:NuevoProducto._id},'secreta')
        await NuevoProducto.save()
        res.json({
            mensaje: 'Producto agregado',
            id: NuevoProducto._id,
            producto: NuevoProducto.producto,
            token
        })
    }
}

ProductoCtrl.productosAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Producto.find({jefe:id})
    res.json(respuesta)
  }

  ProductoCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
    await Producto.findByIdAndRemove({_id:id})
    res.json({
      mensaje: 'Producto Eliminado'
    })
  }


ProductoCtrl.buscarProducto = async(req, res)=>{
    const {producto, id} = req.params
    const respuesta = await Producto.find({producto: {$regex: ".*"+producto+".*"},jefe:id})
    res.json(respuesta)
  }

module.exports = ProductoCtrl;