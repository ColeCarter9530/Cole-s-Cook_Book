const router = require('express').Router();
const recipes = require('./recipes');
const pages = require('./pages');

// localhost:3001/recipes
router.use('/recipes', recipes);
// localhost:3001/
router.use('/', pages);
module.exports = router;