const { Router } = require('express');
const { signUp, logIn } = require('../controllers/Auth/auth.controller');

const router = Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Creates a user account
 *     description: Creates a user account using info from body
 *     requestBody:
 *       description: Registration details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/RegisterInfo'
 *     responses:
 *      '201':
 *        description: User registered successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      '400':
 *        description: The user provided invalid registration details
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      '409':
 *        description: A user with provided email already exists
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      default:
 *        description: An error occured
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */
router.post('/signup', signUp);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Logs in a user
 *     description: Logs in a user if correct details are provided
 *     requestBody:
 *       description: Login details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/LoginInfo'
 *     responses:
 *      '200':
 *        description: Login successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      '400':
 *        description: The user provided invalid login details
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      default:
 *        description: An error occured
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 */
router.post('/login', logIn);

module.exports = router;
