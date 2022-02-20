const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.mainPage);

module.exports = router;

