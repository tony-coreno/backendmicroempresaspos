const ProductoCtrl = {}
const Producto = require('../../models/Productos.model');
const jwt = require('jsonwebtoken');

//Controlador agregar producto

ProductoCtrl.agregarProducto = async(req, res) => {
    const { sku,producto,existencia,precioventa,categoria,marca,unidad,estado,jefe,talla, cantidad} = req.body
    const NuevoProducto = new Producto({
        sku,
        producto,
        existencia,
        precioventa,
        marca,
        categoria,
        cantidad,
        unidad,
        estado,
        jefe,
        talla
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

  ProductoCtrl.marcasAdmin = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Producto.find({jefe:id})
    res.json(respuesta)
  }

 ProductoCtrl.productosAdminEmpleado = async (req, res)=>{
     const jefe = req.params.jefe
     const respuesta = await Producto.find({jefe:jefe})
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

  ProductoCtrl.productoACarrito = async (req, res)=>{
    const sku = req.params.sku
    const respuesta = await Producto.find({sku:sku})
    res.json(respuesta)
  }

  ProductoCtrl.actualizar = async (req, res) => {
    const id = req.params.id;
    await Producto.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: "Producto actualizado" });
  };

  ProductoCtrl.buscarProd = async (req, res)=>{
    const id = req.params.id
    const respuesta = await Producto.find({_id:id})
    res.json(respuesta)
  }

module.exports = ProductoCtrl;