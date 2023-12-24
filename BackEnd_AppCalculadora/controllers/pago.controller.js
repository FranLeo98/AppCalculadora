const Pago = require('./../models/pago');
const pagoCtrl = {};

pagoCtrl.getPagos = async (req, res) => {
    const pagos = await Pago.find();
    res.json(pagos);
}

pagoCtrl.createPago = async (req, res) => {
    const pago = new Pago(req.body);
    await pago.save();
    res.json({
        'status': 'Pago guardado'
    });
}

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id);
    res.json(pago);
}

pagoCtrl.editPago = async (req, res) => {
    //const npago = new Pago (req.body);
    //await Pago.findByIdAndUpdate(req.params.id, {$set: npago}, {new: true});
    const { id } = req.params;
    const pago = {
        monto: req.body.monto.id,
        emailUsuario: req.body.emailUsuario.id,
        fecha: req.body.fecha,
    }
    await Pago.findByIdAndUpdate(id, {$set: pago}, {new: true});
    res.json({
        'status': 'Pago actualizado'
    })
}

pagoCtrl.deletePago = async (req, res) => {
    await Pago.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Pago eliminado'
    })
}

module.exports = pagoCtrl;