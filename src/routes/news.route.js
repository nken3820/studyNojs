const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/create', newsController.create);
router.post('/store', newsController.store);
router.get('/:id/edit', newsController.edit);
router.put('/:id', newsController.update);
router.get('/:slug', newsController.show);

module.exports = router;
