const router = require("express").Router();
const documentTypeController = require('../controllers/documentType.controller')


router.get('/documentTypes', documentTypeController.getAllDocumentTypes);
router.get('/documentTypes/:document_type_id', documentTypeController.getOneDocumentType);
router.post('/documentTypes', documentTypeController.createDocumentType);
router.put("/documentTypes/:document_type_id", documentTypeController.updateDocumentType);
router.delete("/documentTypes/:document_type_id", documentTypeController.deleteDocumentType);

module.exports = router;