const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

class Review extends Model{};

Review.init(
    {
        bookmarked :{
            type : DataTypes.BOOLEAN,
        },
        liked :{
            type : DataTypes.BOOLEAN,
        },
        note : {
            type : DataTypes.INTEGER,
        },
        comment : {
            type : DataTypes.TEXT,
        },
        movie_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        }
    },
    {
        sequelize,
        tableName : "review"
    }
);

module.exports = Review;