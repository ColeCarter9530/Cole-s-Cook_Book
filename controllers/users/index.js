const router = require('express').Router();
const { User } = require('../../models')

router.get('/', (req, res) => {
    res.json('From the users folder!');
});

// Goal: Write a post request to create a new user

router.post('/sign-up', async (req, res) => {
    const { username:UserInputUsername, password:UserInputPassword, email:UserInputEmail } = req.body;
    const userData = await User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail
    });
    res.json(userData);
});

module.exports = router;