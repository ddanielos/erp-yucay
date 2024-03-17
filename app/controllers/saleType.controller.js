const SaleType = require("../models/SaleType.model");

async function getAllSaleTypes(req,res){
    try{
        const SaleTypes = await SaleType.findAll();
        res.status(200).json(SaleTypes);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los tipos de venta'})
    }
}

async function getOneSaleType(req,res){
    const id = req.params.sale_type_id;
    try{
        const oneSaleType = await SaleType.findOne({
            where: {
                sale_type_id: id
            }
        });
        res.status(200).json(oneSaleType);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el tipo de venta'})
    }
}

async function createSaleType(req, res) {
    const dataSaleType = req.body;
    try {
        const newSaleType = await SaleType.create({
            sale_type_id: dataSaleType.sale_type_id,
            sale_type_name: dataSaleType.sale_type_name,
            sale_type_description: dataSaleType.sale_type_description
        });
        res.status(201).json(newSaleType);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el tipo de dato' });
    }
}

async function updateSaleType(req, res) {
    const id = req.params.sale_type_id;
    try {
        const saleType = await SaleType.findOne({
            where: {
                sale_type_id: id
            }
        });
        saleType.set(req.body);
        await saleType.save();
        return res.status(202).json(saleType);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el tipo de venta' });
    }
}

async function deleteSaleType(req, res) {
    const id = req.params.sale_type_id;
    try {
        const deleteSaleType = await SaleType.destroy({
            where: {
                sale_type_id: id
            }
        });
        res.status(202).json(deleteSaleType);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el tipo de venta' });
    }
}
module.exports = {
    getAllSaleTypes,
    getOneSaleType,
    createSaleType,
    updateSaleType,
    deleteSaleType
}