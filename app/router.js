const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController'); // odifier le controller quand ce sera bon

router.get('/', mainController.findAllMovies);

module.exports = router;

