const {Country, Genre, Movie, Review, Season, User} = require('../models/tableIndex');

const movieController = {
    //Définition des paramètres par défaut de query pour retour data standardisé
    /**
     * Search configuration bases, to be called as JS Objects into sequelize instructions
     * Is enhanced for specific utilizations with overload in some further methods
     * @param { User, Country, Genre } - Sequelize objects
     * @param {'relations'} - Sequelize relations between tables, defined in tableIndex
     * @returns { params } - parameters for sequelize methods
     */
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

    /**
     * Formats Movie objects from Sequelize into new objects that conatins only the infos needed
     * @param { data } - returned by any sequelize méthods
     * @returns { movies } - array that contains processed Movie objects shaped with just what we need for rendering
     */
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


    /**
     * Generic sequelize instruction to throw all movies in db
     * @returns {movies} - Array with all Movie objects from db
     */
    async findAllMovies () {
        const data = await Movie.findAll(mainController.moviesQueriesParams);
        const movies = movieController.formatedMovies(data);
        return movies;
    },

    /**
     * Sequelize instruction to pick asked movie from db
     * @param { id } - movie id - integer
     * @returns { movie } - Array that contains the single movie picked. /!\ Important to use formatedMovie method !!
     */
    async findMovieById (id) {
        console.log (id);
        let data = await Movie.findByPk(id, movieController.moviesQueriesParams);
        data = [data];
        const movie = movieController.formatedMovies(data)[0];
        return movie;
    },

    /**
     * Sequelize instruction to pick movies from the targetted season
     * Needs an overload of moviesQueryParams to add a where condition
     * @param { id } - season id - integer
     * @returns { movie } - Array that contains the movies from targetted season.
     */
    async findAllMoviesBySeasonId (id) {
        // On surcharge les paramètres de recherche par défaut
        movieController.moviesQueriesParams.where = { season_id : id };
        const data = await Movie.findAll(movieController.moviesQueriesParams);
        const movies = movieController.formatedMovies(data);
        return movies;
    },
    
    /**
     * Sequelize instruction to pick movies from a specific country
     * Needs an overload of moviesQueryParams to add a where condition, dependant to the object format /!\
     * @param { id } - country id - integer
     * @returns { movie } - Array that contains the movies from targetted country.
     */
    async findAllMoviesByCountryId (id) {
        movieController.moviesQueriesParams.include[1].where = { id : id };
        const data = await Movie.findAll(movieController.moviesQueriesParams);
        const movies = movieController.formatedMovies(data);
        return movies;
    },

    /**
     * Sequelize instruction to pick movies from a specific genre
     * Needs an overload of moviesQueryParams to add a where condition, dependant to the object format /!\
     * @param { id } - genre id - integer
     * @returns { movie } - Array that contains the movies from targetted genre.
     */
    async findAllMoviesByGenreId (id) {
        movieController.moviesQueriesParams.include[2].where = { id : id }; 
        const data = await Movie.findAll(movieController.moviesQueriesParams);
        const movies = movieController.formatedMovies(data);
        return movies;
    },

};

module.exports = movieController;