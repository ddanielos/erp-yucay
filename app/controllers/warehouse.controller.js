const Warehouse = require("../models/Warehouse.model");

async function getAllWarehouses(req,res){
    try{
        const Warehouses = await Warehouse.findAll();
        res.status(200).json(Warehouses);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de almacenes'})
    }
}

async function getOneWarehouse(req,res){
    const id = req.params.warehouse_id;
    try{
        const oneWarehouse = await Warehouse.findOne({
            where: {
                warehouse_id: id
            }
        });
        res.status(200).json(oneWarehouse);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el almacén'})
    }
}

async function createWarehouse(req, res) {
    const dataWarehouse = req.body;
    try {
        const newWarehouse = await Warehouse.create({
            warehouse_name: dataWarehouse.warehouse_name,
            warehouse_address: dataWarehouse.warehouse_address,
            warehouse_phone: dataWarehouse.warehouse_phone,
            warehouse_city: dataWarehouse.warehouse_city
        });
        res.status(201).json(newWarehouse);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el almacén' });
    }
}

async function updateWarehouse(req, res) {
    const id = req.params.warehouse_id;
    try {
        const warehouse = await Warehouse.findOne({
            where: {
                warehouse_id: id
            }
        });
        warehouse.set(req.body);
        await warehouse.save();
        return res.status(202).json(warehouse);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el almacén' });
    }
}

async function deleteWarehouse(req, res) {
    const id = req.params.warehouse_id;
    try {
        const deleteWarehouse = await Warehouse.destroy({
            where: {
                warehouse_id: id
            }
        });
        res.status(202).json(deleteWarehouse);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el almacén' });
    }
}
module.exports = {
    getAllWarehouses,
    getOneWarehouse,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse
}