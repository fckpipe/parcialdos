const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/newUser', authController.newUser);
router.post('/newAdmin', authController.newAdmin);

module.exports = router;
