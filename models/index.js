const User = require('./user');
const Recipes = require('./recipe');

User.hasMany(Recipes, {
    foreignKey: 'user_id'
});

Recipes.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Recipes};