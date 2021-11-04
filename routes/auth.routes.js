const { Router } = require('express');
const { signUp, logIn } = require('../controllers/Auth/auth.controller');
const { viewProfile, updateProfile } = require('../controllers/Auth/profile.controller');
const verifyToken = require('../middlewares/verifyToken');
const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/profile', verifyToken, viewProfile);
router.post('/profile', verifyToken, updateProfile);

module.exports = router;