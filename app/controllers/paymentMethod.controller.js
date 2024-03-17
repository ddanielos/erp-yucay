const PaymentMethod = require("../models/PaymentMethod.model");

async function getAllPaymentMethods(req,res){
    try{
        const PaymentMethods = await PaymentMethod.findAll();
        res.status(200).json(PaymentMethods);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de métodos de pago'})
    }
}

async function getOnePaymentMethod(req,res){
    const id = req.params.payment_method_id;
    try{
        const onePaymentMethod = await PaymentMethod.findOne({
            where: {
                payment_method_id: id
            }
        });
        res.status(200).json(onePaymentMethod);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el método de pago'})
    }
}

async function createPaymentMethod(req, res) {
    const dataPaymentMethod = req.body;
    try {
        const newPaymentMethod = await PaymentMethod.create({
            payment_method: dataPaymentMethod.payment_method,
            description: dataPaymentMethod.description
        });
        res.status(201).json(newPaymentMethod);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el método de pago' });
    }
}

async function updatePaymentMethod(req, res) {
    const id = req.params.payment_method_id;
    try {
        const paymentMethod = await Product.findOne({
            where: {
                payment_method_id: id
            }
        });
        paymentMethod.set(req.body);
        await paymentMethod.save();
        return res.status(202).json(paymentMethod);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el método de pago' });
    }
}

async function deletePaymentMethod(req, res) {
    const id = req.params.payment_method_id;
    try {
        const deletePaymentMethod = await PaymentMethod.destroy({
            where: {
                payment_method_id: id
            }
        });
        res.status(202).json(deletePaymentMethod);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el método de pago' });
    }
}
module.exports = {
    getAllPaymentMethods,
    getOnePaymentMethod,
    createPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
}