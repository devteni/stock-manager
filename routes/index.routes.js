const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const { Router } = require('express');
const router = Router();

router.use('/api/', authRoutes);
router.use('/user/', userRoutes);

module.exports = router;
