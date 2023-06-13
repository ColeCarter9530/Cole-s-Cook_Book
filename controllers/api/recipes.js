const router = require('express').Router();
const { Recipes } = require('../../models')

// Goal: Write a post request to log a new recipe

router.post('/', async (req, res) => {
    const { firstName, lastName, dish,
        ingredients, instructions, email } = req.body;
    console.log(req.body)
    console.log(firstName,
        lastName, 
        dish,
        ingredients,
        instructions,
        email);
    const userData = await Recipes.create({
        firstName,
        lastName, 
        dishName: dish,
        ingredients,
        instructions,
        email
    });
    res.redirect(303, '/');
});

module.exports = router;