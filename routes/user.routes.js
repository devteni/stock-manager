const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { viewLoanProfile } = require('../controllers/Loan/loan.controller');
const { viewPortfolio, addAssets } = require('../controllers/Portfolio/portfolio.controller');
const router = Router();

router.post('/portfolio/add', verifyToken, addAssets);
router.get('/portfolio', verifyToken, viewPortfolio)
router.get('/loan', verifyToken, viewLoanProfile);

module.exports = router;