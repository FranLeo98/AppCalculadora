const Plan = require ('../models/plan');
const planCtrl = {};

planCtrl.getPlanes = async (req, res) => {
    const planes = await Plan.find();
    res.json(planes);
}

planCtrl.createPlan = async (req, res) => {
    const plan = new Plan(req.body);
    await plan.save();
    res.json({
        'status': 'Plan guardado'
    })
}

planCtrl.getPlan = async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
}

planCtrl.editPlan = async (req, res) => {
    //const nplan = new Plan (req.body);
    //await Plan.findByIdAndUpdate(req.params.id, {$set: nplan}, {new: true});
    const { id } = req.params;
    const plan = {
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    await Plan.findByIdAndUpdate(id, {$set: plan}, {new: true});
    res.json({
        'status': 'Plan actualizado'
    });
}

planCtrl.deletePlan = async (req, res) => {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Plan eliminado'
    });
}

module.exports = planCtrl;