const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {};

Recipes.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
        autoIncrement: false
    },
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
        autoIncrement: false
    },
    dishName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
});

module.exports = Recipes;