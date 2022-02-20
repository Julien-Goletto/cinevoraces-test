const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

class Genre extends Model{};

Genre.init(
    {
        name :{
            type : DataTypes.TEXT,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        }
    },
    {
        sequelize,
        tableName : "genre"
    }
);

module.exports = Genre;