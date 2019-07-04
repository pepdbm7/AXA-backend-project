const express = require('express');
const router = express.Router();

const clientRoutes = require('./clientRoutes');
const policyRoutes = require('./policyRoutes');

router.use('/client', clientRoutes);
router.use('/policy', policyRoutes);

module.exports = router;
