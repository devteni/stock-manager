const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { viewProfile, updateProfile, viewPortfolio, viewLoanProfile, addAssets } = require('../controllers/user.controller');
const router = Router();

router.get('/profile', verifyToken, viewProfile);
router.post('/profile', verifyToken, updateProfile);
router.post('/portfolio/add', verifyToken, addAssets);
router.get('/portfolio', verifyToken, viewPortfolio)
router.get('/loan', verifyToken, viewLoanProfile);

module.exports = router;