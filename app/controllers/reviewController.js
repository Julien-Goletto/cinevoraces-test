const {Movie, Review, User} = require('../models/tableIndex');

const reviewController = {
    //Définition des paramètres par défaut de query pour retour data standardisé
    /**
     * Search configuration bases, to be called as JS Objects into sequelize instructions
     * Is enhanced for specific utilizations with overload in some further methods
     * @param { Movie, Review, User } - Sequelize objects
     * @param {'relations'} - Sequelize relations between tables, defined in tableIndex
     * @returns { params } - parameters for sequelize methods
     */
    reviewQueriesParams : {
        attributes : ['id','bookmarked','liked','note','comment'],
        include : [
            {
                model : Movie,
                as : 'aboutMovie',
                attributes : ['french_title']
            },
            {
                model : User,
                as : 'reviewedByUser',
                attributes : ['pseudo']
            },
        ]
    },

    /**
     * Formats Movie objects from Sequelize into new objects that conatins only the infos needed
     * @param { data } - returned by any sequelize méthods
     * @returns { reviews } - array that contains processed Review objects shaped with just what we need for rendering
     */
    formatedReviews (data) {
        let reviews = [];

        // console.log(data[0].dataValues.aboutMovie.dataValues.french_title);

        for (let review of data){
            const reviewData = review.dataValues;
            const keys = Object.keys(reviewData);
            let reviewToPush = {};
            for (let key of keys){
                if (key === 'aboutMovie'){
                reviewToPush[key] = reviewData[key].dataValues.french_title;
                } else if (key === 'reviewedByUser'){
                    reviewToPush[key] = reviewData[key].dataValues.pseudo;
                }
                else {
                    reviewToPush[key] = reviewData[key];
                }
            }
            reviews.push(reviewToPush);
        }
        return reviews;
    },

    /**
     * Generic sequelize instruction to throw all movies in db
     * @returns {movies} - Array with all Movie objects from db
     */
    async findAllReviews () {
        const data = await Review.findAll(reviewController.reviewQueriesParams);
        const reviews = reviewController.formatedReviews(data);
        return reviews;
    },

    /**
     * Sequelize instruction to pick asked movie from db
     * @param { id } - movie id - integer
     * @returns { movie } - Array that contains the single movie picked. /!\ Important to use formatedMovie method !!
     */
    // async findMovieById (id) {
    //     console.log (id);
    //     let data = await Movie.findByPk(id, movieController.moviesQueriesParams);
    //     data = [data];
    //     const movie = movieController.formatedMovies(data)[0];
    //     return movie;
    // },

};

module.exports = reviewController;