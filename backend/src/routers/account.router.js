const express = require('express');
const { accountController } = require('../controllers');

const router = express.Router();

router.post('/verify', accountController.handlePostTokenValidation);
router.post('/signin', accountController.handlePostSignIn);
router.post('/signup', accountController.handlePostSignUp);

module.exports = router;
