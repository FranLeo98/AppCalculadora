const Producto = require ('../models/producto');
const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find().populate('precios.compania');
    res.json(productos);
}

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id).populate('precios.compania');
}

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({
        'status': 'Producto guardado'
    })
}

productoCtrl.editProducto = async (req, res) => {
    //const nproducto = new Producto (req.body);
    //await Producto.findByIdAndUpdate(req.params.id, {$set: nproducto}, {new: true});
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        precios: {
            compania: req.body.precios.compania.id,
            precio: req.body.precios.precio,
        },
        imagen: req.body.imagen,
    }
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({
        'status': 'Producto actualizado'
    })
}

productoCtrl.deleteProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Producto eliminado'
    })
}

module.exports = productoCtrl;