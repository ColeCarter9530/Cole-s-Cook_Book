const recipes = require('./recipes');

const router = require('express').Router();

router.use('/recipes', recipes);

module.exports = router;