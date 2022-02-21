const {Country, Genre, Movie, Review, Season, User} = require('../models/tableIndex');

const mainController = {
    async mainPage (req, res) {

        const data = await Movie.findAll({
            attributes : ['french_title','directors','release_year','length'],
            include : [
                {
                    model : User,
                    as : 'recommendedByUser',
                    attributes : ['pseudo']
                },
                {
                    model : Country,
                    as : 'producedByCountries',
                    attributes : ['name']
                },
                {
                    model : Genre,
                    as : 'movieGenres',
                    attributes : ['name']
                }
        ]
        });

        let movies = [];

        for (let movie of data){
            const movieData = movie.dataValues;
            const keys = Object.keys(movieData);
            let movieToPush = {};
            for (let key of keys){
                if(key === 'recommendedByUser'){
                    movieToPush[key] = movieData[key].dataValues.pseudo;
                }else if (key === 'producedByCountries' || key === 'movieGenres'){
                    movieToPush[key] = [];
                    for (info of movieData[key]){
                        movieToPush[key].push(info.dataValues.name);
                    }
                }
                else{
                    movieToPush[key] = movieData[key];
                }
            }
            movies.push(movieToPush);
        }
        res.send(movies);
        console.log(movies);
    },
};

module.exports = mainController;