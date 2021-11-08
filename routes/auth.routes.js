const { Router } = require('express');
const { signUp, logIn } = require('../controllers/Auth/auth.controller');
const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);

module.exports = router;
