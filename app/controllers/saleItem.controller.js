const SaleItem = require("../models/SaleItem.model");

async function getAllSaleItems(req,res){
    try{
        const SaleItems = await SaleItem.findAll();
        res.status(200).json(SaleItems);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los detalles de venta'})
    }
}

async function getOneSaleItem(req,res){
    const id = req.params.sale_item_id;
    try{
        const oneSaleItem = await SaleItem.findOne({
            where: {
                sale_item_id: id
            }
        });
        res.status(200).json(oneSaleItem);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el detalle de venta'})
    }
}

async function createSaleItem(req, res) {
    const dataSaleItem = req.body;
    try {
        const newSaleItem = await SaleItem.create({ 
            quantity: dataSaleItem.quantity,
            discount_rate: dataSaleItem.discount_rate,
            discount_amount: dataSaleItem.discount_amount,
            isc_tax: dataSaleItem.isc_tax,
            total_amount: dataSaleItem.total_amount,
            igv_rate: dataSaleItem.igv_rate,
            igv_amount: dataSaleItem.igv_amount,
            total_price: dataSaleItem.total_price,
            sale_id: dataSaleItem.sale_id,
            warehouse_id: dataSaleItem.warehouse_id,
            product_id: dataSaleItem.product_id
        });
        res.status(201).json(newSaleItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el detalle de venta' });
    }
}

async function updateSaleItem(req, res) {
    const id = req.params.sale_item_id;
    try {
        const saleItem = await SaleItem.findOne({
            where: {
                sale_item_id: id
            }
        });
        saleItem.set(req.body);
        await saleItem.save();
        return res.status(202).json(saleItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el detalle de venta' });
    }
}

async function deleteSaleItem(req, res) {
    const id = req.params.sale_item_id;
    try {
        const deleteSaleItem = await SaleItem.destroy({ 
            where: {
                sale_item_id: id
            }
        });
        res.status(202).json(deleteSaleItem);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el detalle de venta' });
    }
}
module.exports = {
    getAllSaleItems,
    getOneSaleItem,
    createSaleItem,
    updateSaleItem,
    deleteSaleItem
}