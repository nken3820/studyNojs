const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/Mecontroller');

router.get('/stored/news', meController.storedNews);

module.exports = router;
