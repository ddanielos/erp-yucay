const DocumentType = require("../models/DocumentType.model");

async function getAllDocumentTypes(req,res){
    try{
        const documentTypes = await DocumentType.findAll();
        res.status(200).json(documentTypes);
    }catch(err){
        res.status(500).json({error: 'Error al obtener los tipos de documentos'})
    }
}

async function getOneDocumentType(req,res){
    const id = req.params.document_type_id;
    try{
        const oneDocumentType = await DocumentType.findOne({
            where: {
                document_type_id: id
            }
        });
        res.status(200).json(oneDocumentType);
    }catch(err){
        res.status(500).json({error: 'Error al obtener el tipo de documento'})
    }
}

async function createDocumentType(req, res) {
    const dataDocumentType = req.body;
    try {
        const newDocumentType = await DocumentType.create({ 
            document_type_name: dataDocumentType.document_type_name,
            description: dataDocumentType.description
        });
        res.status(201).json(newDocumentType);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear un nuevo tipo de documento' });
    }
}

async function updateDocumentType(req, res) {
    const id = req.params.document_type_id;
    const dataDocumentType = req.body;
    try {
        const updateDocumentType = await DocumentType.update({ 
            document_type_name: dataDocumentType.document_type_name,
            description: dataDocumentType.description
        },{
            where: {
                document_type_id: id
            }
        });
        res.status(202).json(updateDocumentType);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el tipo de documento' });
    }
}

async function deleteDocumentType(req, res) {
    const id = req.params.document_type_id;
    try {
        const deleteDocumentType = await DocumentType.destroy({ 
            where: {
                document_type_id: id
            }
        });
        res.status(202).json(deleteDocumentType);
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar un nuevo tipo de documento' });
    }
}
module.exports = {
    getAllDocumentTypes,
    getOneDocumentType,
    createDocumentType,
    updateDocumentType,
    deleteDocumentType
}