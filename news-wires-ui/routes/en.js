const express = require('express');
const router = express.Router();

const index = require('../controllers/index');
const privacy = require('../controllers/privacy');
const terms = require('../controllers/terms');
const legal = require('../controllers/legal');

router.get('/(:page([0-9]+))?', index);
router.get('/privacy', privacy);
router.get('/terms', terms);
router.get('/legal', legal);

module.exports = router;
