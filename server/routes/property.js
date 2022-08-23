const express = require('express');
const router = express.Router();
const propertyController = require('../controller/property');

router.get("/", propertyController.authenticatePropertyId);

module.exports = router;