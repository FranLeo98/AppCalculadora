const Usuario = require('./../models/usuario');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) => {
    console.log("Creando usuario");
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario guardado'
    });
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtrl.editUsuario = async (req, res) => {
    //const nusuario = new Usuario (req.body);
    //await Usuario.findByIdAndUpdate(req.params.id, {$set: nusuario}, {new: true});
    const { id } = req.params;
    const usuario = {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        contrasenia: req.body.contrasenia,
        email: req.body.email
    }
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({
        'status': 'Usuario actualizado'
    })
}

usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Usuario eliminado'
    })
}

module.exports = usuarioCtrl;