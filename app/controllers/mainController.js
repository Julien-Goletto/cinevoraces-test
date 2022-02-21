const {Country, Genre, Movie, Review, Season, User} = require('../models/tableIndex');

const mainController = {
    // Fonction de  formatage des objets movies en sortie de Sequelize
    formatedMovies (data) {
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
        return movies;
    },

    //Définition des paramètres par défaut de query pour retour data standardisé
    moviesQueriesParams : {
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
            },
        ]
    },

    //Queries relatives aux objets movies
    async findAllMovies () {
        const data = await Movie.findAll(mainController.moviesQueriesParams);
        const movies = mainController.formatedMovies(data);
        return movies;
    },

    async findMovieById (id) {
        console.log (id);
        let data = await Movie.findByPk(id, mainController.moviesQueriesParams);
        //Petit aménagement pour utiliser le formattage d'objet movies
        data = [data];
        const movie = mainController.formatedMovies(data)[0];
        return movie;
    },

    async findAllMoviesBySeasonId (id) {
        // On surcharge les paramètres de recherche par défaut
        mainController.moviesQueriesParams.where = { season_id : id };
        const data = await Movie.findAll(mainController.moviesQueriesParams);
        const movies = mainController.formatedMovies(data);
        return movies;
    },

    async findAllMoviesByGenreId (id) {
        // On surcharge les paramètres de recherche par défaut :
        mainController.moviesQueriesParams.include[2].where = { id : id };
        const data = await Movie.findAll(mainController.moviesQueriesParams);
        const movies = mainController.formatedMovies(data);
        return movies;
    },

    async findAllMoviesByCountryId (id) {
        // On surcharge les paramètres de recherche par défaut :
        mainController.moviesQueriesParams.include[1].where = { id : id };
        const data = await Movie.findAll(mainController.moviesQueriesParams);
        const movies = mainController.formatedMovies(data);
        return movies;
    },

};

module.exports = mainController;