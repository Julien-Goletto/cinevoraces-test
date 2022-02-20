const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

class Country extends Model{};

Country.init(
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
        tableName : "country"
    }
);

module.exports = Country;