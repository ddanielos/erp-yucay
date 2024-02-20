const Rate = require("../models/Rate.model");

async function getAllRates(req,res){
    try{
        const Rates = await Rate.findAll();
        res.status(200).json(Rates);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de tasas'})
    }
}

async function getOneRate(req,res){
    const id = req.params.rate_id;
    try{
        const oneRate = await Rate.findOne({
            where: {
                rate_id: id
            }
        });
        res.status(200).json(oneRate);
    }catch(err){
        res.status(500).json({error: 'Error al obtener la tasa'})
    }
}

async function createRate(req, res) {
    const dataRate = req.body;
    try {
        const newRate = await Rate.create({ 
            exchange_rate: dataRate.exchange_rate,
            igv_rate: dataRate.igv_rate,
            isc_tax: dataRate.isc_tax,
            enabled: dataRate.enabled
        });
        res.status(201).json(newRate);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear las tasas de impuestos' });
    }
}

async function updateRate(req, res) {
    const id = req.params.rate_id;
    const dataRate = req.body;
    try {
        const updateRate = await Rate.update({ 
            exchange_rate: dataRate.exchange_rate,
            igv_rate: dataRate.igv_rate,
            isc_tax: dataRate.isc_tax,
            enabled: dataRate.enabled
        },{
            where: {
                rate_id: id
            }
        });
        res.status(202).json(updateRate);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar las tasas de impuestos' });
    }
}

async function deleteRate(req, res) {
    const id = req.params.rate_id;
    try {
        const deleteRate = await Rate.destroy({ 
            where: {
                rate_id: id
            }
        });
        res.status(202).json(deleteRate);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar las tasas de impuestos' });
    }
}
module.exports = {
    getAllRates,
    getOneRate,
    createRate,
    updateRate,
    deleteRate
}