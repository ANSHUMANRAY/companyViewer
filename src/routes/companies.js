const express = require('express');
const controllers = require('../controllers/companies');
const validator = require('../middlewares/validator');
const schema = require('../utils/schema');

const router = express.Router();

router.post('/save', validator.validateRequest(schema.postSchema), controllers.postData);
router.post('/companies', validator.validateParams(schema.getSchema), controllers.getData);

module.exports = router;
