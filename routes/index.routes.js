const { Router } = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

const router = Router();

router.use(authRoutes);
router.use('/user/', userRoutes);

module.exports = router;
