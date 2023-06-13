const router = require('express').Router();
const { Recipes } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/recipes', (req, res) => {
    res.json('From the recipes folder!');
    Recipes.findAll({
    
    })
    res.render('main', {})
});

module.exports = router;