const router = require('express').Router();
const { Recipes } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/recipes', (req, res) => {
    Recipes.findAll({})
    .then((recipes) => {
        res.render('recipes', {recipes})
        res.json('please come back soon! this is where you will be able to view your logged recipes');
    })
});

module.exports = router;