const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { viewLoanProfile, getLoan } = require('../controllers/Loan/loan.controller');
const {
  viewProfile,
  updateProfile,
} = require('../controllers/Auth/profile.controller');
const {
  viewPortfolio,
  addAssets,
} = require('../controllers/Portfolio/portfolio.controller');
const router = Router();

router.get('/profile', verifyToken, viewProfile);
router.post('/profile', verifyToken, updateProfile);
router.post('/portfolio/add', verifyToken, addAssets);
router.get('/portfolio', verifyToken, viewPortfolio);
router.post('/loan/apply', verifyToken, getLoan)
router.get('/loan', verifyToken, viewLoanProfile);

module.exports = router;
