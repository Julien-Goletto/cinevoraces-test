const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

class User extends Model{};

User.init(
    {
        pseudo :{
            type : DataTypes.BOOLEAN,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        email :{
            type : DataTypes.BOOLEAN,
        },
        password : {
            type : DataTypes.INTEGER,
        },
        avatar : {
            type : DataTypes.TEXT,
        },
        newsletter_subscription : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        }
    },
    {
        sequelize,
        tableName : "user"
    }
);

module.exports = User;