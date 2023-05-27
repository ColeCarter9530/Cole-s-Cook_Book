const router = require('express').Router();
const users = require('./users');
const pages = require('./pages');
// localhost:3001
// router.get('/', async (req, res) => {
//     res.json('HI!');
// });

// localhost:3001/users
router.use('/users', users);
// localhost:3001/pages
router.use('/', pages);
module.exports = router;