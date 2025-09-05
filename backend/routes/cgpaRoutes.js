const express = require('express');
const router = express.Router();

const { saveCgpa } = require('../controllers/cgpaController');

// POST endpoint remains but the controller responds 410 Gone since history/save was removed
router.post('/', saveCgpa);


module.exports = router;
