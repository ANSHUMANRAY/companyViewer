const express = require('express');
const controllers = require('../controllers/companies');
const validator = require('../middlewares/validator');
const schema = require('../utils/schema');

const router = express.Router();

router.post('/save', validator.validateRequest(schema.postSchema), controllers.postData);
router.get('/companies', validator.validateQuery(schema.getSchema), controllers.getData);
router.patch('/companies/:id', validator.validateParams(schema.patchSchemaParams), validator.validateRequest(schema.patchSchemaRequest), controllers.patchData);

module.exports = router;
