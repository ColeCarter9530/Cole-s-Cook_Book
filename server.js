const express = require('express');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3002;
const app = express();

// access to the public folder
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// This is needed for post requests
app.use(express.json());
app.use(express.urlencoded( { extended: true}));

// const Recipes = require('./controllers/recipes')
const sequelize = require('./config/connection');

app.use(controllers);

// connect to the database THEN run the server
// force:true restarts the tables everytime the server restarts
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("THE SERVER IS RUNNING");
    })
})