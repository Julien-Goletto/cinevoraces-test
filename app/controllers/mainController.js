const {Country, Genre, Movie, Review, Season, User} = require('../models/tableIndex');

const mainController = {
    async mainPage (req, res) {

        const movies = await Movie.findAll({
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
                    attribute : ['name']
                }
        ]
        });
        console.log(movies);
        res.send(movies);
    },
};

module.exports = mainController;