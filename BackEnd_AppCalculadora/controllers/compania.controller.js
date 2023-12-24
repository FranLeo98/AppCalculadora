const Compania = require ('../models/compania');
const companiaCtrl = {};

companiaCtrl.getCompanias = async (req, res) => {
    companias = await Compania.find();
    res.json(companias);
}

companiaCtrl.createCompania = async (req, res) => {
    const compania = new Compania(req.body);
    await compania.save();
    res.json({
        'status': 'Compania guardada'
    });
}

companiaCtrl.getCompania = async (req, res) => {
    const compania = await Compania.findById(req.params.id);
    res.json(usuario);
}

companiaCtrl.editCompania = async (req, res) => {
    //const ncompania = new Compania (req.body);
    //await Compania.findByIdAndUpdate(req.params.id, {$set: ncompania}, {new: true});
    const { id } = req.params;
    const compania = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
    };
    await Compania.findByIdAndUpdate(id, {$set: compania}, {new: true});
    res.json({
        'status': 'Compania actualizada'
    });
}

companiaCtrl.deleteCompania = async (req, res) => {
    await Compania.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Compania eliminada'
    });
}

module.exports = companiaCtrl;