const express = require('express');
const router = express.Router();
const guestController = require('../controller/guest');

router.post('/', guestController.addGuest);
router.get('/', guestController.getGuest);

module.exports = router;