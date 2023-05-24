const express = require('express');
const controllers = require('./controllers');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true}));
const models = require('./models')
const sequelize = require('./config/connection');

app.use(controllers);

// connect to the database THEN run the server
// force:true restarts the tables everytime the server restarts
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("THE SERVER IS RUNNING");
    })
})