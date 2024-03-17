const Location = require("../models/Location.model");

async function getAllLocations(req,res){
    try{
        const Locations = await Location.findAll();
        res.status(200).json(Locations);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los datos de establecimientos'})
    }
}

async function getOneLocation(req,res){
    const id = req.params.location_id;
    try{
        const oneLocation = await Location.findOne({
            where: {
                location_id: id
            }
        });
        res.status(200).json(oneLocation);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el establecimiento'})
    }
}

async function createLocation(req, res) {
    const dataLocation = req.body;
    try {
        const newLocation = await Location.create({
            location_name: dataLocation.location_name,
            location_address: dataLocation.location_address,
            location_phone: dataLocation.location_phone
        });
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el establecimiento' });
    }
}

async function updateLocation(req, res) {
    const id = req.params.location_id;
    try {
        const location = await Location.findOne({
            where: {
                location_id: id
            }
        });
        location.set(req.body);
        await location.save();
        return res.status(202).json(location);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el establecimiento' });
    }
}

async function deleteLocation(req, res) {
    const id = req.params.location_id;
    try {
        const deleteLocation = await Location.destroy({ 
            where: {
                location_id: id
            }
        });
        res.status(202).json(deleteLocation);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el establecimiento' });
    }
}
module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    updateLocation,
    deleteLocation
}