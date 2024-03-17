const Sale = require("../models/Sale.model");

async function getAllSales(req,res){
    try{
        const Sales = await Sale.findAll();
        res.status(200).json(Sales);
    }catch(err){
        res.status(500).json({error: 'Error al obtener las ventas'})
    }
}

async function getOneSale(req,res){
    const id = req.params.sale_id;
    try{
        const oneSail = await Sale.findOne({
            where: {
                sale_id: id
            }
        });
        res.status(200).json(oneSail);
    }catch(err){
        res.status(500).json({error: 'Error al obtener la venta'})
    }
}

async function createSale(req, res) {
    const dataSale = req.body;
    try {
        const newSale = await Sale.create({ 
            sale_date: dataSale.sale_date,
            payment_due_date: dataSale.payment_due_date,
            payment_term: dataSale.payment_term,
            status: dataSale.status,
            currency: dataSale.currency,
            exchange_rate: dataSale.exchange_rate,
            comment: dataSale.comment,
            total_value: dataSale.total_value,
            discount_rate: dataSale.discount_rate,
            discount_amount: dataSale.discount_amount,
            isc_tax: dataSale.isc_tax,
            total_amount: dataSale.total_amount,
            igv_rate: dataSale.igv_rate,
            igv_amount: dataSale.igv_amount,
            total_price: dataSale.total_price,
            customer_id: dataSale.customer_id,
            seller_id: dataSale.seller_id,
            location_id: dataSale.location_id,
            sale_type_id: dataSale.sale_type_id,
            document_type_id: dataSale.document_type_id
        });
        res.status(201).json(newSale);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la venta' });
    }
}

async function updateSale(req, res) {
    const id = req.params.sale_id;
    try {
        const sale = await Sale.findOne({
            where: {
                sale_id: id
            }
        });
        sale.set(req.body);
        await sale.save();
        return res.status(202).json(sale);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la venta' });
    }
}

async function deleteSale(req, res) {
    const id = req.params.sale_id;
    try {
        const deleteSale = await Sale.destroy({ 
            where: {
                sale_id: id
            }
        });
        res.status(202).json(deleteSale);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la venta' });
    }
}
module.exports = {
    getAllSales,
    getOneSale,
    createSale,
    updateSale,
    deleteSale
}
