const express = require('express');
const router = express.Router();

const useController = require('../app/controllers/UserController');

router.get('/signin', useController.signin);
router.get('/signup', useController.signup);

router.post('/signin', useController.signin);
router.post('/signup', useController.signup);

module.exports = router;
