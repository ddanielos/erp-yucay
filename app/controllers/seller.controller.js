const Seller = require("../models/Seller.model");

async function getAllSellers(req,res){
    try{
        const Sellers = await Seller.findAll();
        res.status(200).json(Sellers);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de venvedores'})
    }
}

async function getOneSeller(req,res){
    const id = req.params.seller_id;
    try{
        const oneSeller = await Seller.findOne({
            where: {
                seller_id: id
            }
        });
        res.status(200).json(oneSeller);
    }catch(err){
        res.status(500).json({error: 'Error al obtener al vendedor'})
    }
}

async function createSeller(req, res) {
    const dataSeller = req.body;
    try {
        const newSeller = await Seller.create({ 
            seller_last_name: dataSeller.seller_last_name,
            seller_name: dataSeller.seller_name,
            seller_birthday: dataSeller.seller_birthday,
            seller_gender: dataSeller.seller_gender,
            seller_address: dataSeller.seller_address,
            seller_email: dataSeller.seller_email,
            seller_phone: dataSeller.seller_phone,
            seller_comments: dataSeller.seller_comments,
        });
        res.status(201).json(newSeller);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear los datos del vendedor' });
    }
}

async function updateSeller(req, res) {
    const id = req.params.seller_id;
    try {
        const seller = await Seller.findOne({
            where: {
                seller_id: id
            }
        });
        seller.set(req.body);
        await seller.save();
        return res.status(202).json(seller);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar los datos del vendedor' });
    }
}

async function deleteSeller(req, res) {
    const id = req.params.seller_id;
    try {
        const deleteSeller = await Seller.destroy({ 
            where: {
                seller_id: id
            }
        });
        res.status(202).json(deleteSeller);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el vendedor' });
    }
}
module.exports = {
    getAllSellers,
    getOneSeller,
    createSeller,
    updateSeller,
    deleteSeller
}