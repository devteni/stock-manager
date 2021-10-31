const authRoutes = require('./auth.routes');
const { Router } = require('express');
const router = Router();

router.use('/api/', authRoutes);

module.exports = router;