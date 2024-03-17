const Payment = require("../models/Payment.model");

async function getAllPayments(req,res){
    try{
        const Payments = await Payment.findAll();
        res.status(200).json(Payments);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de las cuenta de pago'})
    }
}

async function getOnePayment(req,res){
    const id = req.params.payment_id;
    try{
        const onePayment = await Payment.findOne({
            where: {
                payment_id: id
            }
        });
        res.status(200).json(onePayment);
    }catch(err){
        res.status(500).json({error: 'Error al obtener la cuenta de pago '})
    }
}

async function createPayment(req, res) {
    const dataPayment = req.body;
    try {
        const newPayment = await Payment.create({ 
            payment_id: dataPayment.payment_id,
            installments: dataPayment.installments,
            amount_due: dataPayment.amount_due,
            sale_id: dataPayment.sale_id
        });
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la cuenta de pago' });
    }
}

async function updatePayment(req, res) {
    const id = req.params.payment_id;
    try {
        const payment = await Payment.findOne({
            where: {
                payment_id: id
            }
        });
        payment.set(req.body);
        await payment.save();
        return res.status(202).json(payment);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la cuenta de pago' });
    }
}

async function deletePayment(req, res) {
    const id = req.params.payment_id;
    try {
        const deletePayment = await Payment.destroy({
            where: {
                payment_id: id
            }
        });
        res.status(202).json(deletePayment);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la cuenta de pago' });
    }
}
module.exports = {
    getAllPayments,
    getOnePayment,
    createPayment,
    updatePayment,
    deletePayment
}