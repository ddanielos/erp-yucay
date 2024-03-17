const Customer = require("../models/Customer.model");

async function getAllCustomers(req,res){
    try{
        const Customers = await Customer.findAll();
        res.status(200).json(Customers);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de clientes'})
    }
}

async function getOneCustomer(req,res){
    const id = req.params.customer_id;
    try{
        const oneCustomer = await Customer.findOne({
            where: {
                customer_id: id
            }
        });
        res.status(200).json(oneCustomer);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el cliente'})
    }
}

async function createCustomer(req, res) {
    const dataCustomer = req.body;
    try {
        const newCustomer = await Customer.create({ 
            customer_name: dataCustomer.customer_name,
            customer_address: dataCustomer.customer_address,
            customer_type: dataCustomer.customer_type,
            identification_type: dataCustomer.identification_type,
            identification_number: dataCustomer.identification_number,
            customer_email: dataCustomer.customer_email,
            customer_phone: dataCustomer.customer_phone,
            customer_website: dataCustomer.customer_website,
            credit_authorized: dataCustomer.credit_authorized
        });
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
}

async function updateCustomer(req, res) {
    const id = req.params.customer_id;
    try {
        const customer = await Customer.findOne({
            where: {
                customer_id: id
            }
        });
        customer.set(req.body);
        await customer.save();
        return res.status(202).json(customer);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
}

async function deleteCustomer(req, res) {
    const id = req.params.customer_id;
    try {
        const deleteCustomer = await Customer.destroy({ 
            where: {
                customer_id: id
            }
        });
        res.status(202).json(deleteCustomer);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
}
module.exports = {
    getAllCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}