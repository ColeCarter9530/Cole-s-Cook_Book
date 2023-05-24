const router = require('express').Router();
const users = require('./users');
// localhost:3001
// router.get('/', async (req, res) => {
//     res.json('HI!');
// });

// localhost:3001/users
router.use('/users', users);

module.exports = router;