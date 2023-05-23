const express = require('express');
const controllers = require('./controllers');
const PORT = 3001;
const app = express();
const sequelize = require('./config/connection');

app.use(controllers);

// connect to the database THEN run the server
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log("THE SERVER IS RUNNING");
    })
})