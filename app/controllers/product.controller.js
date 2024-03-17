const Product = require("../models/Product.model");

async function getAllProducts(req,res){
    try{
        const Products = await Product.findAll();
        res.status(200).json(Products);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de productos'})
    }
}

async function getOneProduct(req,res){
    const id = req.params.product_id;
    try{
        const oneProduct = await Product.findOne({
            where: {
                product_id: id
            }
        });
        res.status(200).json(oneProduct);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el producto'})
    }
}

async function createProduct(req, res) {
    const dataProduct = req.body;
    try {
        const newProduct = await Product.create({
            product_name: dataProduct.product_name,
            product_description: dataProduct.product_description,
            unit: dataProduct.unit,
            unit_price: dataProduct.unit_price,
            taxable_isc: dataProduct.taxable_isc,
            volume_liters_by_unit: dataProduct.volume_liters_by_unit
        });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
}

async function updateProduct(req, res) {
    const id = req.params.product_id;
    try {
        const product = await Product.findOne({
            where: {
                product_id: id
            }
        });
        product.set(req.body);
        await product.save();
        return res.status(202).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
}

async function deleteProduct(req, res) {
    const id = req.params.product_id;
    try {
        const deleteProduct = await Product.destroy({ 
            where: {
                product_id: id
            }
        });
        res.status(202).json(deleteProduct);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
}
module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}