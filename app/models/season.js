const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

class Season extends Model{};

Season.init(
    {
        year :{
            type : DataTypes.INTEGER,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        }
    },
    {
        sequelize,
        tableName : "season"
    }
);

module.exports = Season;