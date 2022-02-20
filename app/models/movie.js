const {Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../sequelize');

class Movie extends Model{};

Movie.init(
    {
        french_title :{
            type : DataTypes.TEXT,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        original_title :{
            type : DataTypes.TEXT,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        directors : {
            type : DataTypes.ARRAY(Sequelize.TEXT),
            validate :{
                notEmpty : true,
            }
        },
        release_year : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        linguage : {
            type : DataTypes.TEXT,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        length : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate :{
                notEmpty : true,
            }
        },
        cast : {
            type : DataTypes.ARRAY(Sequelize.TEXT),
            validate :{
                notEmpty : true,
            }
        },
        presentation : {
            type : DataTypes.TEXT
        },
        season_id : {
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
        tableName : "movie"
    }
);

module.exports = Movie;