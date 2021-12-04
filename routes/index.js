const express = require('express');
const router = express.Router();
const controller = require('../controllers/');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/help', controller.help);
router.get('/item', controller.getItems);
router.post('/items', controller.addItems);

module.exports = router;
