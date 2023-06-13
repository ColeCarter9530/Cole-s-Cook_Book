const router = require('express').Router();
const { Recipes } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/recipes', (req, res) => {
    res.json('please come back soon! this is where you will be able to view your logged recipes');
    Recipes.findAll({

    })
    res.render('recipes', {})
});

module.exports = router;