const PayItem = require("../models/PayItem.model");

async function getAllPayItems(req,res){
    try{
        const payItems = await PayItem.findAll();
        res.status(200).json(payItems);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de las amortizaciones'})
    }
}

async function getOnePayItem(req,res){
    const id = req.params.pay_item_id;
    try{
        const onePayItem = await PayItem.findOne({
            where: {
                pay_item_id: id
            }
        });
        res.status(200).json(onePayItem);
    }catch(err){
        res.status(500).json({error: 'Error al obtener la amortización'})
    }
}

async function createPayItem(req, res) {
    const dataPayItem = req.body;
    try {
        const newPayItem = await PayItem.create({
            pay_item_id: dataPayItem.pay_item_id,
            amount: dataPayItem.amount,
            currency: dataPayItem.currency,
            pay_date: dataPayItem.pay_date,
            op_number: dataPayItem.op_number,
            payment_id: dataPayItem.payment_id,
            payment_method_id: dataPayItem.payment_method_id
        });
        res.status(201).json(newPayItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la amortización' });
    }
}

async function updatePayItem(req, res) {
    const id = req.params.pay_item_id;
    try {
        const payItem = await PayItem.findOne({
            where: {
                pay_item_id: id
            }
        });
        payItem.set(req.body);
        await payItem.save();
        return res.status(202).json(payItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la amortización' });
    }
}

async function deletePayItem(req, res) {
    const id = req.params.pay_item_id;
    try {
        const deletePayItem = await PayItem.destroy({
            where: {
                pay_item_id: id
            }
        });
        res.status(202).json(deletePayItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la amortización' });
    }
}
module.exports = {
    getAllPayItems,
    getOnePayItem,
    createPayItem,
    updatePayItem,
    deletePayItem
}