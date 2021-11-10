const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const {
  viewLoanProfile,
  getLoan,
  payLoan,
} = require('../controllers/Loan/loan.controller');
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

/**
 * @swagger
 * user/portfolio/add:
 *   post:
 *     tags:
 *      - Portfolio
 *     summary: Create a portfolio
 *     description: Adds an asset to the user's portfolio
 *     parameters:
 *      - $ref: '#/components/parameters/user_id'
 *     requestBody:
 *       description: asset payload
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Asset'
 *     responses:
 *      '200':
 *        description: Asset successfully added to your portfolio
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Asset'
 *      '204':
 *        description: Asset
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Asset'
 *      default:
 *        description: An unexpected error occured
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */
router.post('/portfolio/add', verifyToken, addAssets);

/**
 * @swagger
 * user/portfolio:
 *   get:
 *     tags:
 *      - Portfolio
 *     summary: View user's portfolio
 *     description: View the assets in a user's portfolio.
 *     parameters:
 *      - $ref: '#/components/parameters/user_id'
 *     responses:
 *      '200':
 *        description: Your portfolio
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Asset'
 *      '201':
 *        description: (if check_value=true in req.query), Your portfolio value
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *      default:
 *        description: An unexpected error occured
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */
router.get('/portfolio', verifyToken, viewPortfolio);

/**
 * @swagger
 * user/loan:
 *   get:
 *     tags:
 *      - Loan
 *     summary: View loan profile
 *     description: View your loan profile
 *     parameters:
 *      - $ref: '#/components/parameters/user_id'
 *     responses:
 *      '200':
 *        description: Your loan details
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Loan'
 *      '204':
 *        description: No active loan
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Loan'
 *        default:
 *          description: An unexpected error occured
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/loan', verifyToken, viewLoanProfile);

/**
 * @swagger
 * user/loan/apply:
 *   post:
 *     tags:
 *      - Loan
 *     summary: Apply for a loan
 *     description: Enables user to apply for a loan up to 60% their portfolio value
 *     parameters:
 *      - $ref: '#/components/parameters/user_id'
 *     requestBody:
 *       description: loan payload
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Loan'
 *     responses:
 *      '200':
 *        description: Successfully applied for loan
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Loan'
 *        default:
 *          description: An unexpected error occured
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/loan/apply', verifyToken, getLoan);

/**
 * @swagger
 * user/loan/pay:
 *   post:
 *     tags:
 *      - Loan
 *     summary: Pay for a loan
 *     description: Pay for a granted loan per month on a prorated basis
 *     parameters:
 *      - $ref: '#/components/parameters/user_id'
 *     requestBody:
 *       description: loanPayment
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: number
 *     responses:
 *      '200':
 *        description: successfully paid part for month {months}
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Loan'
 *        default:
 *          description: An unexpected error occured
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/loan/pay', verifyToken, payLoan);

module.exports = router;
