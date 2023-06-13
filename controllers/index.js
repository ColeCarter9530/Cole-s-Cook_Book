const apiRoutes = require('./api');
const pagesRoutes = require('./pages');

const router = require('express').Router();

router.use('/api', apiRoutes);
router.use('/', pagesRoutes);


module.exports = router;
